import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import useOnLoadMore from "../../../commons/hooks/customs/useOnLoadMore";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import * as S from "./product.list.styles";

export default function ProductsListUI() {
  const { data } = useQueryFetchUsedItems();
  const { onLoadMore } = useOnLoadMore();

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.InfiniteScroller
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchUseditems.map((el) => (
              <S.Items_Box key={el._id}>
                <S.Imgs_Box>
                  {el.images && el.images[0] ? (
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                  ) : (
                    <></>
                  )}
                </S.Imgs_Box>
                <li>
                  <S.Product_Name>{el.name}</S.Product_Name>
                  <S.Price>
                    {el.price}
                    <span>원</span>
                  </S.Price>
                </li>
              </S.Items_Box>
            )) ?? <></>}
          </S.InfiniteScroller>
          <Link href="###">
            <S.Anchor>상품 등록</S.Anchor>
          </Link>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
