import { Fragment } from 'react'

interface IBoardListUI {
  data?: any
  onClickCreateBoard: () => void
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
        
        {props.data?.fetchBoards.map((el: any) => (
          <tbody key={el._id}>
            <tr>
              <td>1</td>
              <td>{el.title}</td>
              <td>{el.writer}</td>
              <td>{el.createdAt}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={props.onClickCreateBoard}>게시물 등록하기</button>
    </Fragment>
  )
}