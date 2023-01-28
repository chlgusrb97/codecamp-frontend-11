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
  ConmmentSection2_Contents_Iconbox_delete,
} from "./FechboardComment-styles";

import React, { ChangeEvent, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import { Rate } from "antd";
import { Button, Modal } from "antd";

interface IBoardFetchCommentUI {
  onChangeCommentWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  createBoardCommentBtn: () => Promise<void>;
  deleteBoardCommentBtn: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeRate: (value: SetStateAction<number>) => void;
  writer: string;
  password: string;
  contents: string;
  data?: Pick<IQuery, "fetchBoardComments">;
  value: number;
}

export default function BoardFetchCommentUI(props: IBoardFetchCommentUI) {
  return (
    <CommentContainer>
      <CommentWrapper>
        <ConmmentSection1>
          <ConmmentSection1_Head>
            <ConmmentSection1_Head_Icon src="/img/comment.png" />
            <ConmmentSection1_Head_Title>댓글</ConmmentSection1_Head_Title>
          </ConmmentSection1_Head>
          <ConmmentSection1_Contents>
            <ConmmentSection1_Contents_1>
              <ConmmentSection1_Contents_1_Input
                type="text"
                placeholder="작성자"
                onChange={props.onChangeCommentWriter}
                value={props.writer}
              />
              <ConmmentSection1_Contents_1_Input
                type="password"
                placeholder="비밀번호"
                onChange={props.onChangeCommentPassword}
                value={props.password}
              />
              {/* <Contents_Gradebox>
                <Contents_Gradebox_Icon src="/img/star.png" />
                <Contents_Gradebox_Icon src="/img/star.png" />
                <Contents_Gradebox_Icon src="/img/star.png" />
                <Contents_Gradebox_Icon src="/img/star.png" />
                <Contents_Gradebox_Icon src="/img/star.png" />
              </Contents_Gradebox>
               */}
              <span>
                <Rate onChange={props.onChangeRate} value={props.value} />
              </span>
            </ConmmentSection1_Contents_1>
            <ConmmentSection1_Contents_2>
              <ConmmentSection1_Contents_2_Textarea
                onChange={props.onChangeCommentContents}
                maxLength={100}
                value={props.contents}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
              <ConmmentSection1_Contents_2_box>
                <Contents_2_box_Textlength>0/100</Contents_2_box_Textlength>
                <Contents_2_box_Button onClick={props.createBoardCommentBtn}>
                  등록하기
                </Contents_2_box_Button>
              </ConmmentSection1_Contents_2_box>
            </ConmmentSection1_Contents_2>
          </ConmmentSection1_Contents>
        </ConmmentSection1>

        {props.data?.fetchBoardComments.map((el) => (
          <ConmmentSection2 key={el._id}>
            <ConmmentSection2_Container>
              <ConmmentSection2_Usericon src="/img/profile.png" />
              <Contents_Container_Contents>
                <Contents_Container_Contents_box>
                  <ConmmentSection2_Contents_box_Writer>
                    {el.writer}
                  </ConmmentSection2_Contents_box_Writer>
                  {/* <Contents_Gradebox>
                    <Contents_Gradebox_Icon src="/img/star.png" />
                    <Contents_Gradebox_Icon src="/img/star.png" />
                    <Contents_Gradebox_Icon src="/img/star.png" />
                    <Contents_Gradebox_Icon src="/img/star.png" />
                    <Contents_Gradebox_Icon src="/img/star.png" />
                  </Contents_Gradebox>
                   */}
                  <span>
                    <Rate value={el.rating} />
                  </span>
                </Contents_Container_Contents_box>
                <ConmmentSection2_Contents_box_Text>
                  {el.contents}
                </ConmmentSection2_Contents_box_Text>
                <ConmmentSection2_Contents_box_Date>
                  {el.createdAt}
                </ConmmentSection2_Contents_box_Date>
              </Contents_Container_Contents>
            </ConmmentSection2_Container>
            <ConmmentSection2_Contents_Iconbox>
              <ConmmentSection2_Contents_Iconbox_edit src="/img/edit.png" />
              <ConmmentSection2_Contents_Iconbox_delete
                src="/img/delete.png"
                id={el._id}
                onClick={props.deleteBoardCommentBtn}
              />
            </ConmmentSection2_Contents_Iconbox>
          </ConmmentSection2>
        ))}
        <Modal
          title="Basic Modal"
          open={props.isModalOpen}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          비밀번호를 입력해주세요
          <input type="text" />
        </Modal>
      </CommentWrapper>
    </CommentContainer>
  );
}
