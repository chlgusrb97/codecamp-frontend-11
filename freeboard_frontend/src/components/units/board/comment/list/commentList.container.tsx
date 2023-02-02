import CommentListUI from "./commentList.presenter";
import { FETCH_COMMENT, DELETE_COMMENT } from "./commentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

export default function CommentList() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalPassword, setModalPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const { data, fetchMore } = useQuery(FETCH_COMMENT, {
    variables: { boardId: router.query.ID },
  });

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setModalPassword(event.target.value);
  };

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
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
    <CommentListUI
      data={data}
      onChangePassword={onChangePassword}
      onLoadMore={onLoadMore}
      isModalOpen={isModalOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}
