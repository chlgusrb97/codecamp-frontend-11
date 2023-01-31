import { Fragment } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

interface IBoardListUI {
  data?: Pick<IQuery, "fetchBoards">;
  onClickCreateBoard: () => void;
  onClickMovedDetail: (event: MouseEvent<HTMLSpanElement>) => void;
}

export default function BoardListUI(props: IBoardListUI) {
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
              <td>1</td>
              <td id={el._id} onClick={props.onClickMovedDetail}>
                {el.title}
              </td>
              <td>{el.writer}</td>
              <td>{el.createdAt}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={props.onClickCreateBoard}>게시물 등록하기</button>
    </Fragment>
  );
}
