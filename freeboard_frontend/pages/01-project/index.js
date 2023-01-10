import { useState } from 'react'

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
} from '../../styles/01-project-style'

export default function 게시물등록(){
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const [nameErr, setNameErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')
  const [titleErr, setTitleErr] = useState('')
  const [textErr, setTextErr] = useState('')

  function onChangeName(event) {
    setName(event.target.value)
  }

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  function onChangeText(event) {
    setText(event.target.value)
  }

  function onClickBtn(event) {

    let final = true

    if(name === '') {
      setNameErr('* 이름을 입력해주세요')
      final = false
    } else {
      setNameErr('')
    }

    if(password === '') {
      setPasswordErr('* 비밀번호를 입력해주세요')
      final = false
    } else {
      setPassword('')
    }

    if(title === '') {
      setTitleErr('* 제목을 입력해주세요')
      final = false
    } else {
      setTitleErr('')
    }

    if(text === '') {
      setTextErr('* 내용을 입력해주세요')
      final = false
    } else {
      setTextErr('')
    }

    if(final === true) {
      alert('등록이 완료되었습니다')
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
              <TextError>{nameErr}</TextError>
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
            <TextError>{textErr}</TextError>
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