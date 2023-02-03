import { Modal, Rate } from "antd";
import * as S from "./commentList.styles";
import { ICommentListUIProps } from "./commentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.InfiniteScroll_Box style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore}>
        <S.CommentContainer>
          <S.CommentWrapper>
            {props.data?.fetchBoardComments.map((el) => (
              <S.ConmmentSection2 key={el._id}>
                <S.ConmmentSection2_Container>
                  <S.ConmmentSection2_Usericon src="/img/profile.png" />
                  <S.Contents_Container_Contents>
                    <S.Contents_Container_Contents_box>
                      <S.ConmmentSection2_Contents_box_Writer>
                        {el.writer}
                      </S.ConmmentSection2_Contents_box_Writer>
                      <span>
                        <Rate value={el.rating} disabled />
                      </span>
                    </S.Contents_Container_Contents_box>
                    <S.ConmmentSection2_Contents_box_Text>
                      {el.contents}
                    </S.ConmmentSection2_Contents_box_Text>
                    <S.ConmmentSection2_Contents_box_Date>
                      {el.createdAt}
                    </S.ConmmentSection2_Contents_box_Date>
                  </S.Contents_Container_Contents>
                </S.ConmmentSection2_Container>
                <S.ConmmentSection2_Contents_Iconbox>
                  <S.ConmmentSection2_Contents_Iconbox_edit src="/img/edit.png" />
                  <S.ConmmentSection2_Contents_Iconbox_delete
                    src="/img/delete.png"
                    id={el._id}
                    onClick={props.showModal}
                  />
                </S.ConmmentSection2_Contents_Iconbox>
              </S.ConmmentSection2>
            ))}
            {props.isModalOpen && (
              <Modal
                title="비밀번호를 입력해주세요."
                open={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <input type="password" onChange={props.onChangePassword} />
              </Modal>
            )}
          </S.CommentWrapper>
        </S.CommentContainer>
      </InfiniteScroll>
    </S.InfiniteScroll_Box>
  );
}
