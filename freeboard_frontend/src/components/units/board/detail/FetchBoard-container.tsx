import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import FetchBoardUI from "./FetchBoard-presenter";
import { Modal } from "antd";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./FetchBoard-queries";

export default function BoardFetch() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [disLikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.ID },
  });

  const onClickEditBtn = () => {
    router.push(`/main/boards/freeboard-post-moved/${router.query.ID}/edit`);
  };

  const onClickListBoard = () => {
    router.push(`/main/boards`);
  };

  const onClickDeleteBtn = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.ID,
      },
    });
    Modal.success({ content: "게시글이 삭제되었습니다!!" });
    router.push(`/main/boards`);
  };

  const onClickLikeCount = async () => {
    await likeBoard({
      variables: {
        boardId: router.query.ID,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.ID },
        },
      ],
    });
  };

  const onClickDisLikeCount = async () => {
    await disLikeBoard({
      variables: {
        boardId: router.query.ID,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.ID },
        },
      ],
    });
  };

  return (
    <FetchBoardUI
      data={data}
      onClickEditBtn={onClickEditBtn}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickListBoard={onClickListBoard}
      onClickLikeCount={onClickLikeCount}
      onClickDisLikeCount={onClickDisLikeCount}
    />
  );
}
