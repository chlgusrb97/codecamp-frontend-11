import CommentListFuncUI from "./commentList.presenterFunc";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./commentList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import { ICommentListFunc } from "./commentList.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";

export default function CommentListFunc(props: ICommentListFunc) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [deletePassword, setDeletePassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletePassword(event.target.value);
  };

  const showModal = (event: MouseEvent<HTMLImageElement>) => {
    setIsDeleteModalOpen(true);
    setModalId(event.currentTarget.id);
    setDeletePassword("");
  };

  const handleOk = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: deletePassword,
          boardCommentId: modalId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.ID },
          },
        ],
      });
      setIsDeleteModalOpen(false);
    } catch (error) {
      Modal.error({ content: "비밀번호가 틀렸습니다." });
    }
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <CommentListFuncUI
      onChangePassword={onChangePassword}
      isDeleteModalOpen={isDeleteModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      el={props.el}
      onClickUpdate={onClickUpdate}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
    />
  );
}
