import ProductsDetailButton from "../../../commons/buttons/productDetail/product.index";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUsedItem";
import useMutationDeleteUseditem from "../../../commons/hooks/mutations/useMutationDeleteUseditem";
import * as S from "./products.detail.styles";
import Link from "next/link";
import useOnclickBuying from "../../../commons/hooks/customs/useOnClickBuying";
import ProductsCommentWriteUI from "../comment/write/productsComment.write.index";
import ProductsCommentListUI from "../comment/list/productsComment.list.index";
import useOnClickToggledPick from "../../../commons/hooks/customs/useOnClickToggledPick";
import useOnClickBasket from "../../../commons/hooks/customs/useOnClickBasket";

export default function ProductsDetailUI() {
  const { data, router } = useQueryFetchUsedItem();
  const { onClickBuying } = useOnclickBuying();
  const { onClickDeleteUseditem } = useMutationDeleteUseditem();
  const { onClickToggledPick } = useOnClickToggledPick();
  const { onClickBasket } = useOnClickBasket();

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Section_01>
            <S.Section_01_Left>
              {`https://storage.googleapis.com/${undefined}` ? (
                <img
                  src={`https://storage.googleapis.com/${data?.fetchUseditem.images?.[0]}`}
                />
              ) : (
                <></>
              )}
            </S.Section_01_Left>
            <S.Section_01_Right>
              <S.Name_Box>
                <li>
                  <h2>{data?.fetchUseditem.name}</h2>
                </li>
                <li>
                  <Link
                    href={`/main/products/products-post-moved/${router.query.productsId}/edit`}
                  >
                    <a>
                      <img src="/images/edit.png" />
                    </a>
                  </Link>
                  <img
                    src="/images/delete.png"
                    onClick={onClickDeleteUseditem}
                  />
                </li>
              </S.Name_Box>
              <S.Contents_Box>
                <li>
                  <h2>{data?.fetchUseditem.price}</h2>
                  <span>원</span>
                </li>
                <S.DivideLine></S.DivideLine>
                <li>
                  <S.P_Box>
                    <p>{data?.fetchUseditem.remarks}</p>
                  </S.P_Box>
                  <S.Tag_Box>
                    <p>#해시태그</p>
                    <p>#해시태그</p>
                  </S.Tag_Box>
                </li>
              </S.Contents_Box>
              <S.Button_Box>
                <S.Pick_Button onClick={onClickToggledPick}>
                  <img src="/images/whiteheart.png" />
                  <span>찜 0</span>
                </S.Pick_Button>
                <ProductsDetailButton
                  title="장바구니"
                  width="312px"
                  color="#a0a0a0"
                  onClick={onClickBasket(data?.fetchUseditem)}
                />
                <ProductsDetailButton
                  title="바로구매"
                  width="312px"
                  color="#000"
                  onClick={onClickBuying}
                />
              </S.Button_Box>
            </S.Section_01_Right>
          </S.Section_01>

          <S.Section_02>
            <S.Section_02_Left>
              <S.Title>상품정보</S.Title>
              <S.DivideLine></S.DivideLine>
              <S.Text_box>
                <p>{data?.fetchUseditem.contents}</p>
              </S.Text_box>
              <S.Map_Box>
                <li>
                  <img src="/images/location.png" />
                  <span>거래지역</span>
                </li>
                <li></li>
              </S.Map_Box>
            </S.Section_02_Left>
            <S.Section_02_Right>
              <S.Title>상점정보</S.Title>
              <S.DivideLine />
              <S.User_Box>
                <div></div>
                <span>{data?.fetchUseditem.seller?.name}</span>
              </S.User_Box>
              <S.Title>댓글</S.Title>
              <S.DivideLine />
              <ProductsCommentWriteUI />
              <ProductsCommentListUI />
            </S.Section_02_Right>
          </S.Section_02>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
