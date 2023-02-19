import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { ICommentListFunc } from "./CommentList.types";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { Modal, Rate } from "antd";
import * as S from "./CommentList.styles";
import CommentWrite from "../write/CommentWrite.container";

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
    <>
      {isDeleteModalOpen && (
        <Modal
          title="비밀번호를 입력해주세요."
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <S.Modal_Input type="password" onChange={onChangePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.ConmmentSection2 key={props.el._id}>
          <S.ConmmentSection2_Container>
            <S.ConmmentSection2_Usericon src="/img/profile.png" />
            <S.Contents_Container_Contents>
              <S.Contents_Container_Contents_box>
                <S.ConmmentSection2_Contents_box_Writer>
                  {props.el.writer}
                </S.ConmmentSection2_Contents_box_Writer>
                <span>
                  <Rate value={props.el.rating} disabled />
                </span>
              </S.Contents_Container_Contents_box>
              <S.ConmmentSection2_Contents_box_Text>
                {props.el.contents}
              </S.ConmmentSection2_Contents_box_Text>
              <S.ConmmentSection2_Contents_box_Date>
                {props.el.createdAt}
              </S.ConmmentSection2_Contents_box_Date>
            </S.Contents_Container_Contents>
          </S.ConmmentSection2_Container>
          <S.ConmmentSection2_Contents_Iconbox>
            <S.ConmmentSection2_Contents_Iconbox_edit
              src="/img/edit.png"
              onClick={onClickUpdate}
              id={props.el._id}
            />
            <S.ConmmentSection2_Contents_Iconbox_delete
              src="/img/delete.png"
              id={props.el._id}
              onClick={showModal}
            />
          </S.ConmmentSection2_Contents_Iconbox>
        </S.ConmmentSection2>
      )}
      {isEdit && (
        <>
          <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
        </>
      )}
      {/* )} */}
    </>
  );
}
