import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries'    // export는 골라서 가져오기 가능
import BoardWriteUI from './BoardWrite.presenter'    // export default로 한개만 가져오기
import { useRouter } from 'next/router'
// import Sfdsfkjsdfjksdf from './BoardWrite.presenter'     // export default로 이름 바꿔서 가져오기
// import Sfdsfkjsdfjksdf, { apple } from './BoardWrite.presenter'     // export default와 export를 함께 가져오기

// import * as S from './BoardWrite.styles'    // export 한번에 다 가져오기
// S.BlueButton                                // export 한번에 다 가져오기
// S.RedInput                                  // export 한번에 다 가져오기


export default function BoardWrite(props) {

  const router = useRouter()

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [나의함수] = useMutation(나의그래프큐엘셋팅)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onClickSubmit = async () => {
    
    try {
      const result = await 나의함수({
        variables: {                  // variables 이게 $ 역할을 함
          writer: writer,
          title: title,
          contents: contents
        }
      })
      console.log(result)
      router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
    } catch(error) {
      console.log(error)
    }
    
  }

  const onClickUpdate = async () => {
    const myvariables = {number : Number(router.query.number)}
    if(writer) myvariables.writer = writer
    if(title) myvariables.title = title
    if(contents) myvariables.contents = contents

    // 여기서 수정하기
    try {
      const result = await updateBoard({
      variables: myvariables
      
    })
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)
    } catch(error) {
      console.log(error)
    }
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  return (
    <div>
      <div>$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$</div>
      <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter} 
      onChangeTitle={onChangeTitle} 
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} // undefined 이거나, data 이거나 둘 중 하나!
      />
      <div>$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$</div>
    </div>
    // props = {
    //   aaa:onClickSubmit,
    //   bbb:onChangeWriter,
    //   ccc:onChangeTitle,
    //   ddd:onChangeContents
    // }
  )

}