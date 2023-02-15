import { Dispatch, SetStateAction } from "react";

export interface ILayoutNavigationUI {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  toggleSide: (toggled: boolean) => void;
}

export interface IProps {
  isOpen: boolean;
}
