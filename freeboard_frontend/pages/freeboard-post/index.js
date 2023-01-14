import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

import {
  Container,
  Wrapper,
  HeadTitle,
  Section1,
  Section1_Left,
  Section1_Right,
  InputNameTitle,
  Input,
  InputTitle,
  Section2,
  Section3,
  Section3_Input,
  Section4,
  Section4_AddressBox,
  AddressBox_Num,
  AddressBox_Btn,
  Section4_Input1,
  Section4_Input2,
  Section5,
  Section6,
  Section6_Container,
  Container_Boxes,
  Boxes_Plus,
  Boxes_Text,
  Section7,
  Section7_SettingBox,
  SettingBox_Li,
  RadioBtn,
  RadioText,
  SubmitBtn,
  InputTitleBox,
  TextError
} from '../../styles/freeboard-post'

const CREATE_BOARD = gql`
  mutation createMyBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`

export default function FreeboardPost(){

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
            writer: writer,
            password: password,
            title: title,
            contents: contents
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
    <Container>
      <Wrapper>
        <HeadTitle>게시물 등록 </HeadTitle>
        <Section1>
          <Section1_Left>
            <InputTitleBox>
              <InputNameTitle>작성자</InputNameTitle>
              <TextError>{writerErr}</TextError>
            </InputTitleBox>
            <Input placeholder='이름을 적어주세요.' onChange={onChangeName}/>
          </Section1_Left>
          <Section1_Right>
            <InputTitleBox>
              <InputTitle>비밀번호</InputTitle>
              <TextError>{passwordErr}</TextError>
            </InputTitleBox>
            <Input placeholder='비밀번호를 입력해주세요.' type="password" onChange={onChangePassword}/>
          </Section1_Right>
        </Section1>

        <Section2>
          <InputTitleBox>
            <InputTitle>제목</InputTitle>
            <TextError>{titleErr}</TextError>
          </InputTitleBox>
          <Input placeholder='제목을 작성해주세요.' onChange={onChangeTitle}/>
        </Section2>

        <Section3>
          <InputTitleBox>
            <InputTitle>내용</InputTitle>
            <TextError>{contentsErr}</TextError>
          </InputTitleBox>
          <Section3_Input placeholder='내용을 작성해주세요.' onChange={onChangeText}/>
        </Section3>

        <Section4>
          <InputTitle>주소</InputTitle>
          <Section4_AddressBox>
            <AddressBox_Num>07250</AddressBox_Num>
            <AddressBox_Btn>우편번호 검색</AddressBox_Btn>
          </Section4_AddressBox>
          <Section4_Input1 />
          <Section4_Input2 />
        </Section4>

        <Section5>
          <InputTitle>유튜브</InputTitle>
          <Input placeholder='링크를 복사해주세요.'/>
        </Section5>

        <Section6>
          <InputTitle>사진 첨부</InputTitle>
          <Section6_Container>
            <Container_Boxes>
              <Boxes_Plus>+</Boxes_Plus>
              <Boxes_Text>Upload</Boxes_Text>
            </Container_Boxes>
            <Container_Boxes>
              <Boxes_Plus>+</Boxes_Plus>
              <Boxes_Text>Upload</Boxes_Text>
            </Container_Boxes>
            <Container_Boxes>
              <Boxes_Plus>+</Boxes_Plus>
              <Boxes_Text>Upload</Boxes_Text>
            </Container_Boxes>
          </Section6_Container>
        </Section6>

        <Section7>
          <InputTitle>사진 첨부</InputTitle>
          <Section7_SettingBox>
            <SettingBox_Li>
              <RadioBtn type="radio" name="setting"/>
              <RadioText>유튜브</RadioText>
            </SettingBox_Li>
            <SettingBox_Li>
              <RadioBtn type="radio" name="setting"/>
              <RadioText>사진</RadioText>
            </SettingBox_Li>
          </Section7_SettingBox>
        </Section7>

        <SubmitBtn onClick={onClickBtn}>등록하기</SubmitBtn>
      </Wrapper>
    </Container>
    
  )

}