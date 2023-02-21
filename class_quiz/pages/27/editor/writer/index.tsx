import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditor() {
  const router = useRouter();
  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value);

    void trigger("contents");
  };

  const onClickSubmit = async (data) => {
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글이 등록되었습니다." });

    const boardId = result.data.createBoard._id;
    void router.push(`/27/editor/detail/${boardId}`);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
