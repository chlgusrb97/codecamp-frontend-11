import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIProps {
  onClickSignIn: () => void;
  onClickSignUp: () => void;
  onClickLogoutUser: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleSide: (toggled: boolean) => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  mounted: boolean;
}

export interface IProps {
  isOpen: boolean;
}
