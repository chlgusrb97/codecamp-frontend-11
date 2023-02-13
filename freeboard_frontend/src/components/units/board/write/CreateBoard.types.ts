import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

export interface IBoardWrite {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ICreateBoardUI {
  writer: (event: ChangeEvent<HTMLInputElement>) => void;
  password: (event: ChangeEvent<HTMLInputElement>) => void;
  title: (event: ChangeEvent<HTMLInputElement>) => void;
  contents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  YoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  writerErr: string;
  passwordErr: string;
  titleErr: string;
  contentsErr: string;
  onClickBtn: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isModalOpen: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (data: Address) => void;
  address: string;
  zipcode: string;
  onChangeAddressDetail: (data: ChangeEvent<HTMLInputElement>) => void;
  imageUrls: string[];
  onChangeFileUrls: (imageUrls: string, index: number) => void;
}
