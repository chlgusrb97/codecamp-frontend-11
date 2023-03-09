import { ChangeEvent, RefObject } from "react";

export interface IImageUpload {
  index: number;
  imageUrl: string;
  onChangeFileUrls: (imageUrls: string, index: number) => void;
}

export interface IImamgeUploadUI {
  fileRef: RefObject<HTMLInputElement>;
  imageUrl: string;
  onChangeFileImage: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUploadImage: () => void;
}
