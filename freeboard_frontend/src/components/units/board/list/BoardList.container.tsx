import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardListWrite() {
  const router = useRouter();

  const [keyWord, setKeyWord] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: countData, refetch: refetchCountData } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMovedDetail = (event: MouseEvent<HTMLSpanElement>): void => {
    router.push(`/main/boards/freeboard-post-moved/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = (): void => {
    router.push(`/main/boards/freeboard-post `);
  };

  const onChangeKeyWord = (value: string): void => {
    setKeyWord(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickCreateBoard={onClickCreateBoard}
      onClickMovedDetail={onClickMovedDetail}
      refetch={refetch}
      count={countData?.fetchBoardsCount}
      refetchCountData={refetchCountData}
      onChangeKeyWord={onChangeKeyWord}
      keyWord={keyWord}
    />
  );
}
