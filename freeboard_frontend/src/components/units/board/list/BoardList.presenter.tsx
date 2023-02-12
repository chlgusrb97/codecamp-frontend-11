import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../commons/libraries/utils";
import PanginationsBoardList from "../../../commons/paginations/boardList/paginations-boardList.container";
import BoardSearch from "../../../commons/search/BoardSearch/BoardSearch.container";
import { IBoardListUI } from "./BoardList.types";

const SECRETCODE = "!@#$";

export default function BoardListUI(props: IBoardListUI) {
  return (
    <>
      <BoardSearch
        refetch={props.refetch}
        refetchCountData={props.refetchCountData}
        onChangeKeyWord={props.onChangeKeyWord}
      />
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
                {el.title
                  .replaceAll(
                    props.keyWord,
                    `${SECRETCODE}${props.keyWord}${SECRETCODE}`
                  )
                  .split(`${SECRETCODE}`)
                  .map((el) => (
                    <span
                      key={uuidv4()}
                      style={{ color: el === props.keyWord ? "red" : "black" }}
                    >
                      {el}
                    </span>
                  ))}
              </td>
              <td>{el.writer}</td>
              <td>{getDate(el.createdAt)}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <PanginationsBoardList refetch={props.refetch} count={props.count} />
      <button onClick={props.onClickCreateBoard}>게시물 등록하기</button>
    </>
  );
}
