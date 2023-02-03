import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNTER } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardListWrite() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: counteData } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNTER);

  const onClickMovedDetail = (event: MouseEvent<HTMLSpanElement>): void => {
    router.push(`/boards/freeboard-post-moved/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = (): void => {
    router.push(`/boards/freeboard-post `);
  };

  return (
    <BoardListUI
      data={data}
      onClickCreateBoard={onClickCreateBoard}
      onClickMovedDetail={onClickMovedDetail}
      refetch={refetch}
      count={counteData?.fetchBoardsCount}
    />
  );
}
