import { useQuery, gql } from '@apollo/client'
import { MouseEvent } from 'react'

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`


export default function StaticRountingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS)
  
  console.log(data?.fetchBoards)

  const onclickAlertButton = (event: MouseEvent<HTMLDivElement>) => {
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`)
  }

  return (
      <div>
        {data?.fetchBoards.map((el: any) => (
          <div  id={el.writer} onClick={onclickAlertButton}>
            <span>
              <input type="checkbox" />
            </span>
            {/* <span style={mystyles}>{el.number}</span> */}
            <span style={{ margin : "10px" }}>{el.number}</span> {/* HTML로 바로 CSS기능을 넣어서 중괄호가 2번생김 */}
            <span style={{ margin : "10px" }}>{el.title}</span> 
            <span style={{ margin : "10px" }}>{el.writer}</span>
          </div>
        ))}
      </div>
  )

}