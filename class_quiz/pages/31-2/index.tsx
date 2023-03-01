import { gql, useMutation } from "@apollo/client";

import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
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

export default function QuizPage() {
  const [file, setFile] = useState<File>();
  const [imgUrl, setImgUrl] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickButton = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "작성자",
          password: "비밀번호",
          title: "제목",
          contents: "내용",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (event) => {
    const file = event?.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일떄, 여러개 드래그 가능
    if (file === undefined) return;
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <br />
      작성자: <input />
      <br />
      비밀번호: <input />
      <br />
      제목: <input />
      <br />
      내용: <input />
      <br />
      <button onClick={onClickButton}>저장하기</button>
      <img src={imgUrl} />
    </>
  );
}
