import { Dispatch, SetStateAction } from "react"

export interface IPaymentProps {
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

export interface IProps {
  show: boolean
}