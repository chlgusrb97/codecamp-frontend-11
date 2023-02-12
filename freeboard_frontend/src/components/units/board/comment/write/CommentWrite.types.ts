import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../../commons/types/generated/types";

export interface ICommentWrite {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface ICommentWriteUI {
  onChangeCommentWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  createBoardCommentBtn: () => Promise<void>;
  onChangeRate: (value: SetStateAction<number>) => void;
  writer: string;
  password: string;
  contents: string;
  rate: number;
  isEdit?: boolean;
  el?: IBoardComment;
  onClickUpdate: () => Promise<void>;
}
