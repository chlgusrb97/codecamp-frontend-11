import * as S from "./ImageUpload.styles";
import { IImamgeUploadUI } from "./ImageUpload.types";

export default function ImamgeUploadUI(props: IImamgeUploadUI) {
  return (
    <>
      {props.imageUrl !== "" ? (
        <S.UploadImage
          src={`https://storage.googleapis.com/${props.imageUrl}`}
          onClick={props.onClickUploadImage}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUploadImage}>
          <span>+</span>
          <span>Upload</span>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFileImage}
      />
    </>
  );
}
