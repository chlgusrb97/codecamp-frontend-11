import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from './CreateBoard-queries'
import CreateBoardUI from './CreateBoard-presenter'

export default function BoardWrite(props) {

  const router = useRouter()

  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ updateBoard ] = useMutation(UPDATE_BOARD)

  const [ isActive, setIsActive ] = useState(false)
  
  const [writer, setWriter] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const [writerErr, setWriterErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [titleErr, setTitleErr] = useState('')
  const [contentsErr, setContentsErr] = useState('')

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
      // console.log(result);
      // console.log(result.data)
      router.push(`/boards/freeboard-post-moved/${result.data.createBoard._id}`)

    } catch(error) {
      alert(error.message)
    }
    alert("게시글이 등록되었습니다.")
  }
// console.log(router)
  const onClickUpdate = async () => {
    
    const myvariables = { 
      boardId: router.query.ID,
      password,
      updateBoardInput:{
        
      }
    }
    if(title) myvariables.updateBoardInput.title = title
    if(contents) myvariables.updateBoardInput.contents = contents
    
    // console.log( myvariables)

    const result2 = await updateBoard( {
      variables: myvariables
    })
    router.push(`/boards/freeboard-post-moved/${result2.data.updateBoard._id}`)
  }

  function onChangeName(event) {
    setWriter(event.target.value)

    if(event.target.value) {
      setWriterErr("")
    } else {
      setWriterErr("* 이름을 입력해주세요.")
    }
    if(event.target.value && password && title && contents) {
      setIsActive(true)
      setWriterErr("")
    } else {
      setIsActive(false)
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value)

    if(event.target.value) {
      setPasswordErr("")
    } else {
      setPasswordErr("* 비밀번호를 입력해주세요.")
    }
    if(writer && event.target.value && title && contents) {
      setIsActive(true)
      setPasswordErr("")
    } else {
      setIsActive(false)
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)

    if(event.target.value) {
      setTitleErr("") 
    } else {
      setTitleErr("* 제목을 입력해주세요.")
    }
    if(writer && password && event.target.value && contents) {
      setIsActive(true)
      setTitleErr("")
    } else {
      setIsActive(false)
    }
  }

  function onChangeText(event) {
    setContents(event.target.value)

    if(event.target.value) {
      setContentsErr("")
    } else {
      setContentsErr("* 내용을 입력해주세요.")
    }
    if(writer && password && title && event.target.value) {
      setIsActive(true)
      setContentsErr("")
    } else {
      setIsActive(false)
    }
  }


  const onClickBtn = () => {


    if(!writer) {
      setWriterErr('* 이름을 입력해주세요.')
    } else {
      setWriterErr('')
    }

    if(!password) {
      setPasswordErr('* 비밀번호를 입력해주세요.')
    } else {
      setPassword('')
    }

    if(!title) {
      setTitleErr('* 제목을 입력해주세요.')
    } else {
      setTitleErr('')
    }

    if(!contents) {
      setContentsErr('* 내용을 작성해주세요.')
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
      onClickUpdate = {onClickUpdate}
      isActive = {isActive}
      isEdit = {props.isEdit}
      data = {props.data}
    />
  )
}