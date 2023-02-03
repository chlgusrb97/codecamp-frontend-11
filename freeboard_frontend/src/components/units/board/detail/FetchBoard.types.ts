import { IQuery } from "../../../../commons/types/generated/types";

export interface IFetchBoardUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickEditBtn: () => void;
  onClickDeleteBtn: () => Promise<void>;
  onClickListBoard: () => void;
  onClickLikeCount: () => Promise<void>;
  onClickDisLikeCount: () => Promise<void>;
}
