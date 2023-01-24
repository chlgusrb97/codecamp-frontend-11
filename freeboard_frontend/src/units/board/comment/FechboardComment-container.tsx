import BoardFetchCommentUI from './FechboardComment-presenter'
import { CREATE_COMMENT, FETCH_COMMENT, DELETE_COMMENT } from './FechboardComment-queries'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function BoardFetchComment() {

  const router = useRouter()

  const [writer, setCommentWriter] = useState("")
  const [password, setCommentPassword] = useState("")
  const [contents, setCommentContents] = useState("")

  const [ createBoardComment ] = useMutation(CREATE_COMMENT)
  const [ deleteBoardComment ] = useMutation(DELETE_COMMENT)

  const onChangeCommentWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(e.target.value)
  }

  const onChangeCommentPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(e.target.value)
  }

  const onChangeCommentContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContents(e.target.value)
  }

  const { data } = useQuery(FETCH_COMMENT, {
    variables: {boardId: router.query.ID}
  })

  // console.log(data)
  console.log(data.fetchBoardComments.map((el:any) => ({
    el
  })))

  const createBoardCommentBtn = async () => {
    const result = await createBoardComment({
      variables: {
        boardId: router.query.ID,
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating: 1
        }
      }
    })
    router.push(`/boards/freeboard-post-moved/${router.query.ID}`)
  }

  const deleteBoardCommentBtn = async () => {
    await deleteBoardComment({
      variables: {
        boardCommentId: router.query.ID
      }
    })
  }

  return (
    <BoardFetchCommentUI 
    onChangeCommentWriter = {onChangeCommentWriter}
    onChangeCommentPassword = {onChangeCommentPassword}
    onChangeCommentContents = {onChangeCommentContents}
    createBoardCommentBtn = {createBoardCommentBtn}
    deleteBoardCommentBtn = {deleteBoardCommentBtn}
    data = {data}
    />
  )
}