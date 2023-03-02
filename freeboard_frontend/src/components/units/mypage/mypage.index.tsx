import useMypage from "../../commons/hooks/customs/useMypage";
import { AiOutlineDollar } from "react-icons/ai";

export default function MypageUI() {
  const { onClickPayment, onChangeMoney, data } = useMypage();

  return (
    <>
      {/* <!-- jQuery --> */}
      <script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></script>
      {/* <!-- iamport.payment.js --> */}
      <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      금액:{" "}
      <div>
        <AiOutlineDollar />
        {data?.fetchUserLoggedIn.userPoint?.amount} 원
      </div>
      <input type="text" onChange={onChangeMoney} />
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
