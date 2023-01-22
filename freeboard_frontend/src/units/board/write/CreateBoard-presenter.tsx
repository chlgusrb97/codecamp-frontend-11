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
} from './CreateBoard-styles'

import React,{ ChangeEvent, MouseEvent } from 'react'

interface ICreateBoardUI {
  writer: (event: ChangeEvent<HTMLInputElement>) => void
  password: (event: ChangeEvent<HTMLInputElement>) => void
  title: (event: ChangeEvent<HTMLInputElement>) => void
  contents: (event: ChangeEvent<HTMLTextAreaElement>) => void
  writerErr: string
  passwordErr: string
  titleErr: string
  contentsErr: string
  onClickBtn: (event: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  isActive: boolean
  isEdit: boolean
  data?: any
}

export default function CreateBoardUI(props: ICreateBoardUI) {

  return (
    <Container>
      <Wrapper>
        <HeadTitle>게시물 {props.isEdit ? "수정" : "등록"} </HeadTitle>
        <Section1>
          <Section1_Left>
            <InputTitleBox>
              <InputNameTitle>작성자</InputNameTitle>
              <TextError>{props.writerErr}</TextError>
            </InputTitleBox>
            <Input placeholder='이름을 적어주세요.' 
              onChange={props.writer} 
              defaultValue={props.data?.fetchBoard?.writer} 
              readOnly={props.data?.fetchBoard?.writer} />
          </Section1_Left>
          <Section1_Right>
            <InputTitleBox>
              <InputTitle>비밀번호</InputTitle>
              <TextError>{props.passwordErr}</TextError>
            </InputTitleBox>
            <Input placeholder='비밀번호를 입력해주세요.' type="password" onChange={props.password} />
          </Section1_Right>
        </Section1>

        <Section2>
          <InputTitleBox>
            <InputTitle>제목</InputTitle>
            <TextError>{props.titleErr}</TextError>
          </InputTitleBox>
          <Input placeholder='제목을 작성해주세요.' onChange={props.title} defaultValue={props.data?.fetchBoard.title} />
        </Section2>

        <Section3>
          <InputTitleBox>
            <InputTitle>내용</InputTitle>
            <TextError>{props.contentsErr}</TextError>
          </InputTitleBox>
          <Section3_Input placeholder='내용을 작성해주세요.' onChange={props.contents} defaultValue={props.data?.fetchBoard.contents} />
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

        <SubmitBtn 
          onClick={props.isEdit ? props.onClickUpdate : props.onClickBtn}
          isActive={props.isEdit ? !(props.isActive) : props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </SubmitBtn>
      </Wrapper>
    </Container>
  )

}