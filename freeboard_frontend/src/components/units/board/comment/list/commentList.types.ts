import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface ICommentListFunc {
  el: IBoardComment;
}

export interface ICommentListFuncUI {
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  handleOk: () => Promise<void>;
  handleCancel: () => void;
  el: IBoardComment;
  isDeleteModalOpen: boolean;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
