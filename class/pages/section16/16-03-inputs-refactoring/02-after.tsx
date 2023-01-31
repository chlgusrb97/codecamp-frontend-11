import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const { inputs, setInputs } = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
      // 객체의 key형태로 되어있기 때문에 [] 감싸주어서 값이 들어갈 수 있게 된다.
    }));
  };

  // const onChangeWriter = (event) => {
  //   setInputs({
  //     ...inputs,
  //     [event.target.id]: event.target.value,
  //     // 객체의 key형태로 되어있기 때문에 [] 감싸주어서 값이 들어갈 수 있게 된다.
  //   });
  // };

  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,
  //     event.target.id: event.target.value,
  //   });
  // };

  // const onChangeContents = (event) => {
  //   setInputs({
  //     ...inputs,
  //     event.target.id: event.target.value,
  //   });
  // };

  // 한 줄일때는 괄호() 필요없음
  return (
    <div>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
