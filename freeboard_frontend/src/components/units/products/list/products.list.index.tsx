import useOnclickMovedDetail from "../../../commons/hooks/customs/useOnClickMovedDetail";
import * as S from "./products.list.styles";
import { v4 as uuidv4 } from "uuid";
import useOnLoadMoreFetchUseditems from "../../../commons/hooks/customs/useOnLoadMoreFetchUseditems";
import Link from "next/link";

export default function ProductsListUI() {
  const { data, onLoadMore } = useOnLoadMoreFetchUseditems();
  const { onClickMovedDetail } = useOnclickMovedDetail();

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.InfiniteScroller
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
          >
            {data?.fetchUseditems.map((el) => (
              <S.Items_Box
                key={uuidv4()}
                id={el._id}
                onClick={onClickMovedDetail(el)}
              >
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
                </li>
                <li>
                  <S.Price>{el.price} 원</S.Price>
                  <span>3시간전</span>
                </li>
              </S.Items_Box>
            )) ?? <></>}
          </S.InfiniteScroller>
        </S.Container>
        <Link href="/main/products/products-post">
          <a>
            <button
              style={{
                position: "fixed",
                right: "30px",
                top: "100px",
                padding: "20px 40px",
                backgroundColor: "tomato",
                color: "#fff",
              }}
            >
              등록
            </button>
          </a>
        </Link>
      </S.Wrapper>
    </>
  );
}
