import BoardFetchCommentUI from "./FechboardComment-presenter";
import {
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
} from "./FechboardComment-queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, SetStateAction, useState } from "react";

export default function BoardFetchComment() {
  const router = useRouter();

  const [writer, setCommentWriter] = useState("");
  const [password, setCommentPassword] = useState("");
  const [contents, setCommentContents] = useState("");
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

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

  const { data } = useQuery(FETCH_COMMENT, {
    variables: { boardId: router.query.ID },
  });

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
    console.log(result);
  };

  const deleteBoardCommentBtn = async (event: MouseEvent<HTMLImageElement>) => {
    const deleltePassword = setIsModalOpen(true);
    // prompt("비밀번호를 입력해주세요");

    await deleteBoardComment({
      variables: {
        password: deleltePassword,
        boardCommentId: event.currentTarget.id,
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT,
          variables: { boardId: router.query.ID },
        },
      ],
    });
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <BoardFetchCommentUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      createBoardCommentBtn={createBoardCommentBtn}
      deleteBoardCommentBtn={deleteBoardCommentBtn}
      onChangeRate={onChangeRate}
      writer={writer}
      password={password}
      contents={contents}
      data={data}
      value={value}
      isModalOpen={isModalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}
