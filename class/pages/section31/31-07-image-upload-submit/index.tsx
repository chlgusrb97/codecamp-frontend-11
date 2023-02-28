import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";
// import type {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";
import {
  wrapAsync,
  wrapFileAsync,
} from "../../../src/commons/libraries/asyncFunc";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

const 나의그래프큐엘셋팅 = gql`
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

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    // 2. createBoard

    const result = await 나의함수({
      variables: {
        // variables 이게 $ 역할을 함
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다!!!!",
          contents: "내용입니다@@@",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (
    event?: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event?.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일떄, 여러개 드래그 가능
    if (file === undefined) return;
    console.log(file);

    // 1. 임시URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음.
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapFileAsync(onChangeFile)} />
      <img src={imgUrl} />
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> */}

      <button onClick={wrapAsync(onClickSubmit)}>게시글등록하기</button>
    </>
  );
}