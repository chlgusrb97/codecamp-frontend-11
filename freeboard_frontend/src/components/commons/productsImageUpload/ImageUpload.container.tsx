import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import ImamgeUploadUI from "./ImageUpload.presenter";
import { UPLOAD_FILE } from "./ImageUpload.queries";
import { IImageUpload } from "./ImageUpload.types";

export default function ImageUpload(props: IImageUpload) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadfile] = useMutation(UPLOAD_FILE);

  const onClickUploadImage = (): void => {
    fileRef.current?.click();
  };

  const onChangeFileImage = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    try {
      const result = await uploadfile({ variables: { file } });
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <ImamgeUploadUI
      fileRef={fileRef}
      imageUrl={props.imageUrl}
      onChangeFileImage={onChangeFileImage}
      onClickUploadImage={onClickUploadImage}
    />
  );
}
