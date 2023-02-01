import { Fragment } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import PanginationsBoardList from "../../../commons/paginations/boardList/paginations-boardList.container";
import { ApolloQueryResult } from "@apollo/client";

interface IBoardListUI {
  data?: Pick<IQuery, "fetchBoards">;
  onClickCreateBoard: () => void;
  onClickMovedDetail: (event: MouseEvent<HTMLSpanElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export default function BoardListUI(props: IBoardListUI) {
  console.log(props);
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>

        {props.data?.fetchBoards.map((el) => (
          <tbody key={el._id}>
            <tr>
              <td>{String(el._id).slice(-4).toLocaleUpperCase()}</td>
              <td id={el._id} onClick={props.onClickMovedDetail}>
                {el.title}
              </td>
              <td>{el.writer}</td>
              <td>{getDate(el.createdAt)}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <PanginationsBoardList refetch={props.refetch} count={props.count} />
      <button onClick={props.onClickCreateBoard}>게시물 등록하기</button>
    </Fragment>
  );
}
