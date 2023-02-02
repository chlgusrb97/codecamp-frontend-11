import { CREATE_COMMENT } from "./commentWrite.queries";
import { useRouter } from "next/router";
import CommentWriteUI from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { FETCH_COMMENT } from "../list/commentList.queries";

export default function CommentWrite() {
  const router = useRouter();

  const [writer, setCommentWriter] = useState("");
  const [password, setCommentPassword] = useState("");
  const [contents, setCommentContents] = useState("");
  const [value, setValue] = useState(0);

  const [createBoardComment] = useMutation(CREATE_COMMENT);

  const onChangeCommentWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(e.target.value);
  };

  const onChangeCommentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(e.target.value);
  };

  const onChangeCommentContents = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCommentContents(e.target.value);
  };

  const onChangeRate = (value: SetStateAction<number>) => {
    setValue(value);
  };

  const createBoardCommentBtn = async () => {
    const result = await createBoardComment({
      variables: {
        boardId: router.query.ID,
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: value,
        },
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT,
          variables: { boardId: router.query.ID },
        },
      ],
    });
    setCommentWriter("");
    setCommentPassword("");
    setCommentContents("");
    setValue(0);
  };

  return (
    <CommentWriteUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      createBoardCommentBtn={createBoardCommentBtn}
      onChangeRate={onChangeRate}
      writer={writer}
      password={password}
      contents={contents}
      value={value}
    />
  );
}
