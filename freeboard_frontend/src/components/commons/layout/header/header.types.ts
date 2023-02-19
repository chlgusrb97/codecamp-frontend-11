import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  onClickSignIn: () => void;
  onClickSignUp: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleSide: (toggled: boolean) => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IProps {
  isOpen: boolean;
}
