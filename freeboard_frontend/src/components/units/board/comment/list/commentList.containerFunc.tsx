import CommentListFuncUI from "./commentList.presenterFunc";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./commentList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import { ICommentListFunc } from "./commentList.types";

export default function CommentListFunc(props: ICommentListFunc) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalPassword, setModalPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

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
            query: FETCH_COMMENTS,
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
    <CommentListFuncUI
      onChangePassword={onChangePassword}
      isModalOpen={isModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      el={props.el}
    />
  );
}
