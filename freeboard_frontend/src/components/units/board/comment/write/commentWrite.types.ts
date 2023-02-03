import { ChangeEvent, SetStateAction } from "react";

export interface ICommentWriteUI {
  onChangeCommentWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  createBoardCommentBtn: () => Promise<void>;
  onChangeRate: (value: SetStateAction<number>) => void;
  writer: string;
  password: string;
  contents: string;
  value: number;
}
