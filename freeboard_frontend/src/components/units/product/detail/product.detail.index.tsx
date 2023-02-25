import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryMarketDetail";
import * as S from "./product.detail.styles";

export default function ProductDetailUI() {
  const data = useQueryFetchUsedItem();

  console.log(data?.fetchUseditem.contents);

  return (
    <>
      <S.Wrapper>
        판매자: <div>{data?.fetchUseditem.seller}</div>
        상품명: <div>{data?.fetchUseditem.name}</div>
        {/* 판매자: <div>{data?.fetchUseditem.}</div> */}
        판매자: <div>{data?.fetchUseditem.remarks}</div>
        판매자: <div>{data?.fetchUseditem.price}</div>
        판매자: <div>{data?.fetchUseditem.contents}</div>
      </S.Wrapper>
    </>
  );
}
