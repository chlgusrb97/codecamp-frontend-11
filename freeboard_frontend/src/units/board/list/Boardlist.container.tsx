import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { BOARDLISTQUERY } from './Boardlist.queries'; 
import BoardListUI from './Boardlist.presenter'

export default function BoardListWrite() {
  const router = useRouter()

  const onClickCreateBoard = () => {
    router.push(`/boards/freeboard-post`)
  }

  const { data } = useQuery(BOARDLISTQUERY);

  return <BoardListUI
    data = {data}
    onClickCreateBoard = {onClickCreateBoard}
  />

}