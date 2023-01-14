import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`


export default function StaticRountingMovedPage() {
  const { data } = useQuery(FETCH_BOARD)
  
  console.log(data)

  return (
    <div>
      <div>1번 게시글 이동이 완료되었습니다.</div>

      {/* 처음 그릴때부터 fetchBoard가 없기때문에 에러 발생 */}
      {/* <div>작성자: {data.fetchBoard.writer}</div>
      <div>제목: {data.fetchBoard.title}</div>
      <div>내용: {data.fetchBoard.contents}</div> */}

      {/* <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div> */}


      {/* 옵셔널 체인징 */}
      {/* <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>   
      <div>내용: {data?.fetchBoard.contents}</div> */}

      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data ? data?.fetchBoard.contents : "로딩중입니다!!!"}</div>  {/* 삼항 연산자 */}
    </div>
  )

}