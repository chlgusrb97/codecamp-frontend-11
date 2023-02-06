import { Rate } from "antd";
import CommentList from "../list/commentList.container";
import * as S from "./commentWrite.style";
import { ICommentWriteUI } from "./commentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUI) {
  return (
    <S.CommentContainer>
      <S.CommentWrapper>
        <S.ConmmentSection1>
          <S.ConmmentSection1_Head>
            {!props.isEdit === true && (
              <>
                <S.ConmmentSection1_Head_Icon src="/img/comment.png" />
                <S.ConmmentSection1_Head_Title>
                  댓글
                </S.ConmmentSection1_Head_Title>
              </>
            )}
          </S.ConmmentSection1_Head>
          <S.ConmmentSection1_Contents>
            <S.ConmmentSection1_Contents_1>
              <S.ConmmentSection1_Contents_1_Input
                type="text"
                placeholder="작성자"
                onChange={props.onChangeCommentWriter}
                value={
                  props.writer !== "" ? props.writer : props.el?.writer ?? ""
                }
              />
              <S.ConmmentSection1_Contents_1_Input
                type="password"
                placeholder="비밀번호"
                onChange={props.onChangeCommentPassword}
                value={props.password}
              />
              <span>
                <Rate onChange={props.onChangeRate} value={props.rate} />
              </span>
            </S.ConmmentSection1_Contents_1>
            <S.ConmmentSection1_Contents_2>
              <S.ConmmentSection1_Contents_2_Textarea
                onChange={props.onChangeCommentContents}
                maxLength={100}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                value={
                  props.contents !== ""
                    ? props.contents
                    : props.el?.contents ?? ""
                }
              />
              <S.ConmmentSection1_Contents_2_box>
                <S.Contents_2_box_Textlength>
                  {props.contents.length}
                  /100
                </S.Contents_2_box_Textlength>
                <S.Contents_2_box_Button
                  onClick={
                    props.isEdit === true
                      ? props.onClickUpdate
                      : props.createBoardCommentBtn
                  }
                >
                  등록하기
                </S.Contents_2_box_Button>
              </S.ConmmentSection1_Contents_2_box>
            </S.ConmmentSection1_Contents_2>
          </S.ConmmentSection1_Contents>
        </S.ConmmentSection1>
        <CommentList />
      </S.CommentWrapper>
    </S.CommentContainer>
  );
}
