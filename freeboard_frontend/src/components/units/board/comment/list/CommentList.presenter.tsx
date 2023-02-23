import CommentListFunc from "./CommentListItem";
import * as S from "./CommentList.styles";
import { ICommentListUIProps } from "./CommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    // <S.InfiniteScroll_Box>
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      // useWindow={false}
    >
      <S.CommentContainer>
        <S.CommentWrapper>
          {props.data?.fetchBoardComments.map((el) => (
            <CommentListFunc key={uuidv4()} el={el} />
          ))}
        </S.CommentWrapper>
      </S.CommentContainer>
    </InfiniteScroll>
    // </S.InfiniteScroll_Box>
  );
}
