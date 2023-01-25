import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./FetchBoard-queries";
import { useRouter } from "next/router";
import FetchBoardUI from "./FetchBoard-presenter";

export default function BoardFetch() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.ID },
  });

  const onClickEditBtn = () => {
    router.push(`/boards/freeboard-post-moved/${router.query.ID}/edit`);
  };

  const onClickListBoard = () => {
    router.push(`/boards`);
  };

  const onClickDeleteBtn = async () => {
    console.log(router);
    await deleteBoard({
      variables: {
        boardId: router.query.ID,
      },
    });
    router.push(`/boards`);
  };

  return (
    <FetchBoardUI
      fetchWriter={data?.fetchBoard?.writer}
      fetchDate={data?.fetchBoard?.createdAt}
      fetchTitle={data?.fetchBoard?.title}
      fetchContents={data?.fetchBoard?.contents}
      onClickEditBtn={onClickEditBtn}
      onClickDeleteBtn={onClickDeleteBtn}
      onClickListBoard={onClickListBoard}
    />
  );
}
