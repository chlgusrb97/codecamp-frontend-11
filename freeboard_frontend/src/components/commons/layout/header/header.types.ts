import { Dispatch, SetStateAction } from "react";

export interface ILayoutHeaderUIProps {
  onClickSignIn: () => void;
  onClickSignUp: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleSide: (toggled: boolean) => void;
}

export interface IProps {
  isOpen: boolean;
}
