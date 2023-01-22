import {

  Container,
  Wrapper,
  Section1,
  Section1_WriterLeft,
  WriterLeft_ProfileImg,
  WriterLeft_TextBox,
  WriterLeft_TextBox_Writer,
  WriterLeft_TextBox_DateBox,
  TextBox_DateBox_DateTitle,
  TextBox_DateBox_DateContents,
  Section1_WriterRight,
  Section1_WriterRight_LinkImg,
  Section1_WriterRight_LocationImg,
  Section1_DivideLine,
  Section02,
  Section02_ContentsTitle,
  Section02_ContentsImg,
  Section02_ContentsText,
  Section02_ContentsVideoBox,
  Section02_Section02_ContentsVideoBox_Video,
  Section02_ContentsUpDownBox,
  Section02_ContentsUpDownBox_Up,
  ContentsUpDownBox_Up_img,
  ContentsUpDownBox_Up_count,
  Section02_ContentsUpDownBox_Down,
  ContentsUpDownBox_Down_img,
  ContentsUpDownBox_Down_count,
  OnclickButtonUl,
  OnclickButtonLi

} from './FechBoard-styles'

interface IFetchBoardUI {
  fetchWriter: string
  fetchDate: string
  fetchTitle: string
  fetchContents: string
  onClickEditBtn: () => void
  onClickDeleteBtn: () => Promise<void>
  onClickListBoard: () => void
}

export default function FetchBoardUI(props: IFetchBoardUI) {

  return (
    <Container>
      <Wrapper>
        <Section1>
          <Section1_WriterLeft>
            <WriterLeft_ProfileImg src='/img/profile.png' alt='유저아이콘' />
            <WriterLeft_TextBox>
              <WriterLeft_TextBox_Writer>{props.fetchWriter}</WriterLeft_TextBox_Writer>
              <WriterLeft_TextBox_DateBox>
                <TextBox_DateBox_DateTitle>Date : </TextBox_DateBox_DateTitle>
                <TextBox_DateBox_DateContents>{props.fetchDate}</TextBox_DateBox_DateContents>
              </WriterLeft_TextBox_DateBox>
            </WriterLeft_TextBox>
          </Section1_WriterLeft>
          <Section1_WriterRight>
            <Section1_WriterRight_LinkImg src='/img/link.png' alt='링크아이콘' />
            <Section1_WriterRight_LocationImg src='/img/location.png' alt='위치아이콘' />
          </Section1_WriterRight>
        </Section1>
        <Section1_DivideLine></Section1_DivideLine>

        <Section02>
          <Section02_ContentsTitle>{props.fetchTitle}</Section02_ContentsTitle>
          <Section02_ContentsImg src='/img/image.png' alt='이미지' />
          <Section02_ContentsText>{props.fetchContents}</Section02_ContentsText>
          <Section02_ContentsVideoBox>
            <Section02_Section02_ContentsVideoBox_Video src='/img/video.png' alt='동영상' />
          </Section02_ContentsVideoBox>
          <Section02_ContentsUpDownBox>
            <Section02_ContentsUpDownBox_Up>
              <ContentsUpDownBox_Up_img src='/img/like.png' alt='좋아요버튼' />
              <ContentsUpDownBox_Up_count>0</ContentsUpDownBox_Up_count>
            </Section02_ContentsUpDownBox_Up>
            <Section02_ContentsUpDownBox_Down>
              <ContentsUpDownBox_Down_img src='/img/dislike.png' alt='싫어요버튼' />
              <ContentsUpDownBox_Down_count>0</ContentsUpDownBox_Down_count>
            </Section02_ContentsUpDownBox_Down>
          </Section02_ContentsUpDownBox>
        </Section02>
      </Wrapper>
      <OnclickButtonUl>
        <OnclickButtonLi onClick={props.onClickListBoard}>목록으로</OnclickButtonLi>
        <OnclickButtonLi onClick={props.onClickEditBtn}>수정하기</OnclickButtonLi>
        <OnclickButtonLi onClick={props.onClickDeleteBtn}>삭제하기</OnclickButtonLi>
      </OnclickButtonUl>
    </Container>
  )

}