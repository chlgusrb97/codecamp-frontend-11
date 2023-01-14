import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
    _id
    writer
    title
    contents
    youtubeUrl
    likeCount
    dislikeCount
    images
    createdAt
    }
  }
`

import {

  Container,
  Wrapper,
  Section1,
  Section1_WritterLeft,
  WritterLeft_ProfileImg,
  WritterLeft_TextBox,
  WriiterLeft_TextBox_Wriiter,
  WriiterLeft_TextBox_DateBox,
  TextBox_DateBox_DateTitle,
  TextBox_DateBox_DateContents,
  Section1_WritterRight,
  Section1_WritterRight_LinkImg,
  Section1_WritterRight_LocationImg,
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
  ContentsUpDownBox_Down_count

} from '../../../styles/freeboard-post-moved'

export default function FreeboardPostMoved () {

  const router = useRouter()
  console.log(router)

  const [ likeCount, setLikeCount ] = useState(0)
  const [ disLikeCount, setDisLikeCount ] = useState(0)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.number }
  })
  
  console.log(data)
  
  function onClickLikeUp() {
    setLikeCount(likeCount + 1)
  }

  function onClickDislikeUp() {
    setDisLikeCount(disLikeCount + 1)
  }
  
  return (
    <Container>
      <Wrapper>
        <Section1>
          <Section1_WritterLeft>
            <WritterLeft_ProfileImg src='../img/profile.png' alt='유저아이콘' />
            <WritterLeft_TextBox>
              <WriiterLeft_TextBox_Wriiter>{data?.fetchBoard?.writer}</WriiterLeft_TextBox_Wriiter>
              <WriiterLeft_TextBox_DateBox>
                <TextBox_DateBox_DateTitle>Date : </TextBox_DateBox_DateTitle>
                <TextBox_DateBox_DateContents>{data?.fetchBoard?.createdAt}</TextBox_DateBox_DateContents>
              </WriiterLeft_TextBox_DateBox>
            </WritterLeft_TextBox>
          </Section1_WritterLeft>
          <Section1_WritterRight>
            <Section1_WritterRight_LinkImg src='../img/link.png' alt='링크아이콘' />
            <Section1_WritterRight_LocationImg src='../img/location.png' alt='위치아이콘' />
          </Section1_WritterRight>
        </Section1>
        <Section1_DivideLine></Section1_DivideLine>

        <Section02>
          <Section02_ContentsTitle>{data?.fetchBoard?.title}</Section02_ContentsTitle>
          <Section02_ContentsImg src='../img/image.png' alt='이미지' />
          <Section02_ContentsText>{data?.fetchBoard?.contents}</Section02_ContentsText>
          <Section02_ContentsVideoBox>
            <Section02_Section02_ContentsVideoBox_Video src='../img/video.png' alt='동영상' />
          </Section02_ContentsVideoBox>
          <Section02_ContentsUpDownBox>
            <Section02_ContentsUpDownBox_Up>
              <ContentsUpDownBox_Up_img src='../img/like.png' alt='좋아요버튼' onClick={onClickLikeUp} />
              <ContentsUpDownBox_Up_count>{likeCount}</ContentsUpDownBox_Up_count>
            </Section02_ContentsUpDownBox_Up>
            <Section02_ContentsUpDownBox_Down>
              <ContentsUpDownBox_Down_img src='../img/dislike.png' alt='싫어요버튼' onClick={onClickDislikeUp} />
              <ContentsUpDownBox_Down_count>{disLikeCount}</ContentsUpDownBox_Down_count>
            </Section02_ContentsUpDownBox_Down>
          </Section02_ContentsUpDownBox>
        </Section02>
      </Wrapper>
    </Container>
  )

}