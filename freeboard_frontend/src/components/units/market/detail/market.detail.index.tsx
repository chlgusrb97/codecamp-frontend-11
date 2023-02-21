import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryMarketDetail";
import * as S from "./market.detail.styles";

export default function MarketDetail() {
  const { data } = useQueryFetchUsedItem();

  return (
    <>
      <S.Wrapper>
        판매자: <div>{data?.fetchUseditem.seller}</div>
        상품명: <div>{data?.fetchUseditem.name}</div>
        {/* 판매자: <div>{data?.fetchUseditem.}</div> */}
        판매자: <div>{data?.fetchUseditem.seller}</div>
        판매자: <div>{data?.fetchUseditem.seller}</div>
        판매자: <div>{data?.fetchUseditem.seller}</div>
      </S.Wrapper>
    </>
  );
}
