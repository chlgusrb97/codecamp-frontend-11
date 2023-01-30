import { IQuery } from "../../../../commons/types/generated/types";
import React from "react";
import ReactPlayer from "react-player";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
  Section02_ContentsUpDownBox,
  Section02_ContentsUpDownBox_Up,
  ContentsUpDownBox_Up_img,
  ContentsUpDownBox_Up_count,
  Section02_ContentsUpDownBox_Down,
  ContentsUpDownBox_Down_img,
  ContentsUpDownBox_Down_count,
  OnclickButtonUl,
  OnclickButtonLi,
} from "./FechBoard-styles";

interface IFetchBoardUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickEditBtn: () => void;
  onClickDeleteBtn: () => Promise<void>;
  onClickListBoard: () => void;
  onClickLikeCount: () => Promise<void>;
  onClickDisLikeCount: () => Promise<void>;
}

export default function FetchBoardUI(props: IFetchBoardUI) {
  return (
    <Container>
      <Wrapper>
        <Section1>
          <Section1_WriterLeft>
            <WriterLeft_ProfileImg src="/img/profile.png" alt="유저아이콘" />
            <WriterLeft_TextBox>
              <WriterLeft_TextBox_Writer>
                {props.data?.fetchBoard?.writer}
              </WriterLeft_TextBox_Writer>
              <WriterLeft_TextBox_DateBox>
                <TextBox_DateBox_DateTitle>Date : </TextBox_DateBox_DateTitle>
                <TextBox_DateBox_DateContents>
                  {props.data?.fetchBoard?.createdAt}
                </TextBox_DateBox_DateContents>
              </WriterLeft_TextBox_DateBox>
            </WriterLeft_TextBox>
          </Section1_WriterLeft>
          <Section1_WriterRight>
            <Section1_WriterRight_LinkImg
              src="/img/link.png"
              alt="링크아이콘"
            />
            <Section1_WriterRight_LocationImg
              src="/img/location.png"
              alt="위치아이콘"
              id="my-element"
              data-tooltip-content={`${
                props.data?.fetchBoard?.boardAddress?.address ?? ""
              } ${props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""}`}
            />
            <Tooltip
              anchorId="my-element"
              style={{
                position: "absolute",
                display: "block",
                right: 0,
              }}
            />
          </Section1_WriterRight>
        </Section1>
        <Section1_DivideLine></Section1_DivideLine>

        <Section02>
          <Section02_ContentsTitle>
            {props.data?.fetchBoard?.title}
          </Section02_ContentsTitle>
          <Section02_ContentsImg src="/img/image.png" alt="이미지" />
          <Section02_ContentsText>
            {props.data?.fetchBoard?.contents}
          </Section02_ContentsText>
          <Section02_ContentsVideoBox>
            <ReactPlayer
              url={String(props.data?.fetchBoard?.youtubeUrl)}
              controls={true}
            />
          </Section02_ContentsVideoBox>
          <Section02_ContentsUpDownBox>
            <Section02_ContentsUpDownBox_Up>
              <ContentsUpDownBox_Up_img
                src="/img/like.png"
                alt="좋아요버튼"
                onClick={props.onClickLikeCount}
              />
              <ContentsUpDownBox_Up_count>
                {props.data?.fetchBoard?.likeCount}
              </ContentsUpDownBox_Up_count>
            </Section02_ContentsUpDownBox_Up>
            <Section02_ContentsUpDownBox_Down>
              <ContentsUpDownBox_Down_img
                src="/img/dislike.png"
                alt="싫어요버튼"
                onClick={props.onClickDisLikeCount}
              />
              <ContentsUpDownBox_Down_count>
                {props.data?.fetchBoard?.dislikeCount}
              </ContentsUpDownBox_Down_count>
            </Section02_ContentsUpDownBox_Down>
          </Section02_ContentsUpDownBox>
        </Section02>
      </Wrapper>
      <OnclickButtonUl>
        <OnclickButtonLi onClick={props.onClickListBoard}>
          목록으로
        </OnclickButtonLi>
        <OnclickButtonLi onClick={props.onClickEditBtn}>
          수정하기
        </OnclickButtonLi>
        <OnclickButtonLi onClick={props.onClickDeleteBtn}>
          삭제하기
        </OnclickButtonLi>
      </OnclickButtonUl>
    </Container>
  );
}
