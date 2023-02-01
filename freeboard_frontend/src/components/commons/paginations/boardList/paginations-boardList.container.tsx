import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import PanginationsBoardListUI from "./paginations-boardList.presenter";

export interface IPaginations01Props {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export default function PanginationsBoardList(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [targetId, setTargetId] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    const targetId = Number(event.currentTarget.id);
    setTargetId(targetId);
    void props.refetch({ page: targetId });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setTargetId(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setTargetId(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <PanginationsBoardListUI
      targetId={targetId}
      startPage={startPage}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
