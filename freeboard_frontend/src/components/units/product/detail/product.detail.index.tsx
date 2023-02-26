import Link from "next/link";
import ProductButton from "../../../commons/buttons/product/product.index";
import useMutationDeleteUseditem from "../../../commons/hooks/mutations/useMutationDeleteUseditem";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUsedItem";
import * as S from "./product.detail.styles";

export default function ProductDetailUI() {
  const { data, router } = useQueryFetchUsedItem();
  const { onClickDeleteUseditem } = useMutationDeleteUseditem();

  console.log(router.query.productsId);

  return (
    <>
      <S.Wrapper>
        판매자: <div>{data?.fetchUseditem.seller?.name}</div>
        상품명: <div>{data?.fetchUseditem.name}</div>
        {/* 판매자: <div>{data?.fetchUseditem.seller}</div> */}
        판매자: <div>{data?.fetchUseditem.remarks}</div>
        판매자: <div>{data?.fetchUseditem.price}</div>
        판매자: <div>{data?.fetchUseditem.contents}</div>
        <S.ProductButton_Box>
          <div onClick={onClickDeleteUseditem}>
            <ProductButton title="삭제" />
          </div>
          <Link href="/main/products">
            <a>
              <ProductButton title="목록" />
            </a>
          </Link>
          <Link
            href={`/main/products/products-post-moved/${router.query.productsId}/edit`}
          >
            <a>
              <ProductButton title="수정" />
            </a>
          </Link>
        </S.ProductButton_Box>
      </S.Wrapper>
    </>
  );
}
