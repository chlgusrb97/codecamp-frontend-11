import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardArgs } from '../../../src/commons/types/generated/types'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`


export default function StaticRountingMovedPage() {
  const router = useRouter()
  console.log(router)

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) }
  })
  // data?.fetchBoard?.   데이터 확인
  
  console.log(data)

  return (
    <div>
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>

      {/* 처음 그릴때부터 fetchBoard가 없기때문에 에러 발생 */

      /* <div>작성자: {data.fetchBoard.writer}</div>
      <div>제목: {data.fetchBoard.title}</div>
      <div>내용: {data.fetchBoard.contents}</div> */}

      {/* <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data && data.fetchBoard.contents}</div> */}


      {/* 옵셔널 체인징 */}
      {/* <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>   
      <div>내용: {data?.fetchBoard.contents}</div> */}

      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>  {/* 삼항 연산자 */}
    </div>
  )

}