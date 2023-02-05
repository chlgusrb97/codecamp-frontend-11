import { useQuery, gql } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { Span } from "./styles/styles";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function Pagination() {
  const [startPage, setStartPage] = useState(1);
  const [targetId, setTargetId] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: startPage,
    },
  });

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
    setTargetId(Number(event.currentTarget.id));
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id} id={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      <button onClick={onClickPrevPage}>이전페이지</button>
      {new Array(10).fill("").map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Span
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              isActive={index + startPage === targetId}
            >
              {index + startPage}
            </Span>
          )
      )}
      <button
        onClick={onClickNextPage}
        disabled={startPage + 10 <= lastPage ? false : true}
      >
        {lastPage}
        다음페이지
      </button>
    </div>
  );
}
