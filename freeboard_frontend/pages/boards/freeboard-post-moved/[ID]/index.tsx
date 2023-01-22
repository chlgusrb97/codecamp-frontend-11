import BoardFetch from '../../../../src/units/board/detail/FetchBoard-container'
import BoardFetchComment from '../../../../src/units/board/comment/FechboardComment-container'

export default function FreeboardPostMoved () {

  return (
    <div>
      <BoardFetch />
      <BoardFetchComment />
    </div>
  )

}