import React from "react";
import ReactPlayer from "react-player";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { IFetchBoardUI } from "./FetchBoard.types";
import * as S from "./FetchBoard-styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function FetchBoardUI(props: IFetchBoardUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Section1>
          <S.Section1_WriterLeft>
            <S.WriterLeft_ProfileImg src="/img/profile.png" alt="유저아이콘" />
            <S.WriterLeft_TextBox>
              <S.WriterLeft_TextBox_Writer>
                {props.data?.fetchBoard?.writer}
              </S.WriterLeft_TextBox_Writer>
              <S.WriterLeft_TextBox_DateBox>
                <S.TextBox_DateBox_DateTitle>
                  Date :{" "}
                </S.TextBox_DateBox_DateTitle>
                <S.TextBox_DateBox_DateContents>
                  {getDate(props.data?.fetchBoard?.createdAt)}
                </S.TextBox_DateBox_DateContents>
              </S.WriterLeft_TextBox_DateBox>
            </S.WriterLeft_TextBox>
          </S.Section1_WriterLeft>
          <S.Section1_WriterRight>
            <S.Section1_WriterRight_LinkImg
              src="/img/link.png"
              alt="링크아이콘"
            />
            <S.Section1_WriterRight_LocationImg
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
          </S.Section1_WriterRight>
        </S.Section1>
        <S.Section1_DivideLine></S.Section1_DivideLine>

        <S.Section02>
          <S.Section02_ContentsTitle>
            {props.data?.fetchBoard?.title}
          </S.Section02_ContentsTitle>
          <S.Section02_ContentsImg src="/img/image.png" alt="이미지" />
          <S.Section02_ContentsText>
            {props.data?.fetchBoard?.contents}
          </S.Section02_ContentsText>
          <S.Section02_ContentsVideoBox>
            <ReactPlayer
              url={String(props.data?.fetchBoard?.youtubeUrl)}
              controls={true}
            />
          </S.Section02_ContentsVideoBox>
          <S.Section02_ContentsUpDownBox>
            <S.Section02_ContentsUpDownBox_Up>
              <S.ContentsUpDownBox_Up_img
                src="/img/like.png"
                alt="좋아요버튼"
                onClick={props.onClickLikeCount}
              />
              <S.ContentsUpDownBox_Up_count>
                {props.data?.fetchBoard?.likeCount}
              </S.ContentsUpDownBox_Up_count>
            </S.Section02_ContentsUpDownBox_Up>
            <S.Section02_ContentsUpDownBox_Down>
              <S.ContentsUpDownBox_Down_img
                src="/img/dislike.png"
                alt="싫어요버튼"
                onClick={props.onClickDisLikeCount}
              />
              <S.ContentsUpDownBox_Down_count>
                {props.data?.fetchBoard?.dislikeCount}
              </S.ContentsUpDownBox_Down_count>
            </S.Section02_ContentsUpDownBox_Down>
          </S.Section02_ContentsUpDownBox>
        </S.Section02>
      </S.Wrapper>
      <S.OnclickButtonUl>
        <S.OnclickButtonLi onClick={props.onClickListBoard}>
          목록으로
        </S.OnclickButtonLi>
        <S.OnclickButtonLi onClick={props.onClickEditBtn}>
          수정하기
        </S.OnclickButtonLi>
        <S.OnclickButtonLi onClick={props.onClickDeleteBtn}>
          삭제하기
        </S.OnclickButtonLi>
      </S.OnclickButtonUl>
    </S.Container>
  );
}
