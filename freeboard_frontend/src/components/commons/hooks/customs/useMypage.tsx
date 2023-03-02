import { ChangeEvent, useState } from "react";
import useMutationCreatePointTransactionOfLoading from "../mutations/useMutationCreatePointTransactionOfLoading";
import {
  FETCH_USER_LOGGED_IN,
  useQueryFetchUserLoggedIn,
} from "../queries/useQueryFetchUserLoggedIn";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function useMypage() {
  const [money, setMoney] = useState("");

  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  const { data } = useQueryFetchUserLoggedIn();

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주석 시 주문번호 자동 생성됨.
        name: "포인트 충전",
        amount: money,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "",
        // buyer_addr: "",
        // buyer_postcode: "01181",
        m_redirect_url: "/main/mypage", // 모바일에서는 결제 시, 페이지 주소가 바뀜. 따라서, 결제 끝나고 돌아갈 주소 입력해야함.
      },
      async (rsp: any) => {
        // callback
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          console.log(rsp);
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          });

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  const onChangeMoney = (event: ChangeEvent<HTMLInputElement>) => {
    setMoney(event.currentTarget.value);
  };
  return { onClickPayment, onChangeMoney, data };
}
