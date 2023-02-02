import { ChangeEvent, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

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

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalOpen: boolean;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  handleOk: () => Promise<void>;
  handleCancel: () => void;
  onLoadMore: () => void;
}
