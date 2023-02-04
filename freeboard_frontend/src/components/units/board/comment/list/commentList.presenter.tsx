import CommentListFunc from "./commentList.containerFunc";
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
              <CommentListFunc key={el._id} el={el} />
            )) ?? <></>}
          </S.CommentWrapper>
        </S.CommentContainer>
      </InfiniteScroll>
    </S.InfiniteScroll_Box>
  );
}
