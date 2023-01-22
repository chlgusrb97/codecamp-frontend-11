import {
  CommentContainer,
  CommentWrapper,
  ConmmentSection1,
  ConmmentSection1_Head,
  ConmmentSection1_Head_Icon,
  ConmmentSection1_Head_Title,
  ConmmentSection1_Contents,
  ConmmentSection1_Contents_1,
  ConmmentSection1_Contents_1_Input,
  Contents_Gradebox,
  Contents_Gradebox_Icon,
  ConmmentSection1_Contents_2,
  ConmmentSection1_Contents_2_Textarea,
  ConmmentSection1_Contents_2_box,
  Contents_2_box_Textlength,
  Contents_2_box_Button,
  ConmmentSection2,
  ConmmentSection2_Usericon,
  ConmmentSection2_Container,
  Contents_Container_Contents,
  Contents_Container_Contents_box,
  ConmmentSection2_Contents_box_Writer,
  ConmmentSection2_Contents_box_Text,
  ConmmentSection2_Contents_box_Date,
  ConmmentSection2_Contents_Iconbox,
  ConmmentSection2_Contents_Iconbox_edit,
  ConmmentSection2_Contents_Iconbox_delete
} from './FechboardComment-styles'

export default function BoardFetchCommentUI() {
  return (
    <CommentContainer>
      <CommentWrapper>
        <ConmmentSection1>
          <ConmmentSection1_Head>
            <ConmmentSection1_Head_Icon src='/img/comment.png'/>
            <ConmmentSection1_Head_Title>댓글</ConmmentSection1_Head_Title>
          </ConmmentSection1_Head>
          <ConmmentSection1_Contents>
            <ConmmentSection1_Contents_1>
              <ConmmentSection1_Contents_1_Input placeholder='작성자' />
              <ConmmentSection1_Contents_1_Input placeholder='비밀번호' />
              <Contents_Gradebox>
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
              </Contents_Gradebox>
            </ConmmentSection1_Contents_1>
            <ConmmentSection1_Contents_2>
              <ConmmentSection1_Contents_2_Textarea maxLength={100} placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' />
              <ConmmentSection1_Contents_2_box>
                <Contents_2_box_Textlength>0/100</Contents_2_box_Textlength>
                <Contents_2_box_Button>등록하기</Contents_2_box_Button>
              </ConmmentSection1_Contents_2_box>
            </ConmmentSection1_Contents_2>
          </ConmmentSection1_Contents>
        </ConmmentSection1>
        <ConmmentSection2>
          <ConmmentSection2_Container>
            <ConmmentSection2_Usericon src='/img/profile.png' />
            <Contents_Container_Contents>
              <Contents_Container_Contents_box>
                <ConmmentSection2_Contents_box_Writer>홍길동</ConmmentSection2_Contents_box_Writer>
                <Contents_Gradebox>
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                <Contents_Gradebox_Icon src='/img/star.png' />
                </Contents_Gradebox>
              </Contents_Container_Contents_box>
              <ConmmentSection2_Contents_box_Text>
                진짜 유익하고 정말 필요한 정보인 것 같아요!
              </ConmmentSection2_Contents_box_Text>
              <ConmmentSection2_Contents_box_Date>
                2021.02.22
              </ConmmentSection2_Contents_box_Date>
            </Contents_Container_Contents>
          </ConmmentSection2_Container>
          <ConmmentSection2_Contents_Iconbox>
            <ConmmentSection2_Contents_Iconbox_edit src='/img/edit.png' />
            <ConmmentSection2_Contents_Iconbox_delete src='/img/delete.png' />
          </ConmmentSection2_Contents_Iconbox>
        </ConmmentSection2>
      </CommentWrapper>
    </CommentContainer>
  )
}