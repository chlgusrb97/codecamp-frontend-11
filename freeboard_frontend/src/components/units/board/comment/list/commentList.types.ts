import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalOpen: boolean;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  handleOk: () => Promise<void>;
  handleCancel: () => void;
  onLoadMore: () => void;
}
