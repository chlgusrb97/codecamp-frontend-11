import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { LikeOutlined } from "@ant-design/icons";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUpload() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    // console.log(file);

    const result = await uploadFile({
      variables: { file },
    });
    console.log(result);
    setImgUrl(result.data?.uploadFile.url ?? "");
  };

  const onChanegeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChanegePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChanegeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChanegeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSaved = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [imgUrl],
        },
      },
    });
    console.log(result);
  };

  const onClickLike = (): void => {
    fileRef.current?.click();
  };

  return (
    <>
      <input type="text" placeholder="작성자" onChange={onChanegeWriter} />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={onChanegePassword}
      />
      <input type="text" placeholder="제목" onChange={onChanegeTitle} />
      <input type="text" placeholder="내용" onChange={onChanegeContents} />
      <button onClick={onClickSaved}>저장하기</button>

      <LikeOutlined onClick={onClickLike} />
      <input
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        style={{ display: "none" }}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
