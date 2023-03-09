import Script from "next/script"
import { useState } from "react"
import usePayment from "../hooks/customs/usePayment"
import * as S from "./payment.styles"
import { IPaymentProps } from "./payment.types"

export default function Payment(props: IPaymentProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const { onClickPayment, onChangeMoney, money, setMoney } = usePayment()

  const onClickOpenPrice = () => {
    setIsOpen((prev) => !prev)
  }

  const onClickPriceValue = (money: any) => () => {
    setMoney(money)
    onClickOpenPrice()
  }

  const onClickPaymentDelete = () => {
    props.setShow(false)
  }

  return (
    <>
      {/* <!-- jQuery --> */}
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      
      <S.Wrapper show={props.show}>
        <S.Payment_Box>
          <img src="/images/delete02.png" onClick={onClickPaymentDelete} />
          <div>
            <h2>충전하실 금액을 선택해주세요!</h2>
            <S.Input_Box>
              <img src="/images/arrow.png" onClick={onClickOpenPrice} />
              <input type="text" disabled placeholder="포인트 선택" value={money} onChange={onChangeMoney} />
            </S.Input_Box>
            {isOpen ? (
              <S.Price_Box>
                <li onClick={onClickPriceValue(100)}>100</li>
                <li onClick={onClickPriceValue(500)}>500</li>
                <li onClick={onClickPriceValue(2000)}>2,000</li>
                <li onClick={onClickPriceValue(5000)}>5,000</li>
              </S.Price_Box>
            ) : (
              <></>
            )}
            <button 
              onClick={onClickPayment}
              style={{backgroundColor: money === "" ? "#bdbdbd" : "#000"}}
            >
              충전하기
            </button>
          </div>
        </S.Payment_Box>
      </S.Wrapper>
    </>
  )
}