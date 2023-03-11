import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  onClickSignIn: () => void;
  onClickSignUp: () => void;
  onClickLogoutUser: () => void;
  onClickPaymentModal: () => void;
  isOpen: boolean;
  show: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setShow: Dispatch<SetStateAction<boolean>>;
  toggleSide: (toggled: boolean) => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IProps {
  isOpen: boolean;
}
