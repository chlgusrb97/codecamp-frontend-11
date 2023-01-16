import { useQuery } from '@apollo/client'
import { FETCH_BOARD } from './FetchBoard-queries'
import { useRouter } from 'next/router'
import FetchBoardUI from './FetchBoard-presenter'
// import { useState } from 'react'

export default function BoardFetch() {

  const router = useRouter()
  console.log(router)

  // const [ likeCount, setLikeCount ] = useState(0)
  // const [ disLikeCount, setDisLikeCount ] = useState(0)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.number }
  })
  
  console.log(data)
  
  // function onClickLikeUp() {
  //   setLikeCount(likeCount + 1)
  // }

  // function onClickDislikeUp() {
  //   setDisLikeCount(disLikeCount + 1)
  // }

  return (
    <FetchBoardUI 
      fetchWriter = {data?.fetchBoard?.writer}
      fetchDate = {data?.fetchBoard?.createdAt}
      fetchTitle = {data?.fetchBoard?.title}
      fetchContents = {data?.fetchBoard?.contents}
    />
  )

}