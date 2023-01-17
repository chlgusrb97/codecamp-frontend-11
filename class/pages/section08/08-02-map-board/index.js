import { useQuery, gql } from '@apollo/client'

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

  // const mystyles = {
  //   margin: "10px"
  // }

  return (
      <div>
        {data?.fetchBoards.map(el => (
          <div key={el.number}>
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