import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD } from './CreateBoard-queries'
import CreateBoardUI from './CreateBoard-presenter'

export default function BoardWrite() {

  const router = useRouter()

  const [ createBoard ] = useMutation(CREATE_BOARD)
  
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const [writerErr, setWriterErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [titleErr, setTitleErr] = useState('')
  const [contentsErr, setContentsErr] = useState('')

  function onChangeName(event) {
    setWriter(event.target.value)
    setWriterErr("")
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
    setPasswordErr("")
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
    setTitleErr("")
  }

  function onChangeText(event) {
    setContents(event.target.value)
    setContentsErr("")
  }

  const createBoardPush = async () => {

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents
          }
        }
      })
      console.log(result);
      console.log(result.data)
      router.push(`freeboard-post-moved/${result.data.createBoard._id}`)

    } catch(error) {
      alert(error.message)
    }
    alert("게시글이 등록되었습니다.")
  }

  const onClickBtn = () => {


    if(!writer) {
      setWriterErr('* 이름을 입력해주세요')
    } else {
      setWriterErr('')
    }

    if(!password) {
      setPasswordErr('* 비밀번호를 입력해주세요')
    } else {
      setPassword('')
    }

    if(!title) {
      setTitleErr('* 제목을 입력해주세요')
    } else {
      setTitleErr('')
    }

    if(!contents) {
      setContentsErr('* 내용을 입력해주세요')
    } else {
      setContentsErr('')
    }

    if(writer && password && title && contents) {
      createBoardPush()
    }

  }

  return (
    <CreateBoardUI 
      writer = {onChangeName}
      password = {onChangePassword}
      title = {onChangeTitle}
      contents = {onChangeText}
      writerErr = {writerErr}
      passwordErr = {passwordErr}
      titleErr = {titleErr}
      contentsErr = {contentsErr}
      onClickBtn = {onClickBtn}
    />
  )
}