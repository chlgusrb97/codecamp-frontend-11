import { useRouter } from "next/router";
import Script from "next/script";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function LoadingPage() {
  const router = useRouter();

  const [money, setMoney] = useState(0);

  const onChangeMoney = (event) => {
    setMoney(event.currentTarget.value);
  };

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp31236712"); // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "아이폰",
        amount: money,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "http://localhost:3000/28/payment/loading",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          router.push("/28/payment/complete");
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      <Script
        // {/* <!-- jQuery --> */}
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>

      <select name="job" onChange={onChangeMoney}>
        <option disabled selected>
          가격선택
        </option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
