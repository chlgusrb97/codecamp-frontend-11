import InfiniteScroll from "react-infinite-scroller"
import useOnLoadMoreFetchUseditemQuestions from "../../../../commons/hooks/customs/useOnLoadMoreFetchUseditemQuestions"
import * as S from "./productsComment.list.styles"
import ProductsCommentListItemUI from "./productsComment.listItem.index"
import { v4 as uuidv4 } from "uuid"

export default function ProductsCommentListUI() {
  const { data, onLoadMore } = useOnLoadMoreFetchUseditemQuestions()

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        <S.Wrapper>
              {data?.fetchUseditemQuestions.map((el) => (
                <ProductsCommentListItemUI key={uuidv4()} el={el} />
              ))}
        </S.Wrapper>
      </InfiniteScroll>
    </>
  )
}