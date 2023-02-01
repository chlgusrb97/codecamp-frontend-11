import BoardFetchCommentUI from "./FechboardComment-presenter";
import {
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
} from "./FechboardComment-queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, SetStateAction, useState } from "react";
import { Modal } from "antd";

export default function BoardFetchComment() {
  const router = useRouter();

  const [writer, setCommentWriter] = useState("");
  const [password, setCommentPassword] = useState("");
  const [contents, setCommentContents] = useState("");
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalPassword, setModalPassword] = useState("");

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
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  const showModal = (event: MouseEvent<HTMLImageElement>) => {
    setIsModalOpen(true);
    setModalId(event.currentTarget.id);
    setModalPassword("");
  };

  const handleOk = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: modalPassword,
          boardCommentId: modalId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.ID },
          },
        ],
      });
      setIsModalOpen(false);
    } catch (error) {
      Modal.error({ content: "비밀번호가 틀렸습니다!!" });
    }
  };
  console.log(modalPassword);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <BoardFetchCommentUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      createBoardCommentBtn={createBoardCommentBtn}
      onChangeRate={onChangeRate}
      onChangePassword={onChangePassword}
      writer={writer}
      password={password}
      contents={contents}
      data={data}
      value={value}
      isModalOpen={isModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}
