import ProductsWriteInput from "../../../commons/inputs/productWrite/productWriteInput.index";
import * as S from "./products.write.styles";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import KakaoMapPage from "../../../commons/kakakoMap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IProductWriteUIProps } from "./products.write.types";
import useFormMarketWrite from "../../../commons/useForm/useFormProductsWrite";
import useProductWriteSubmit from "../../../commons/hooks/customs/useProductWriteSubmit";
import useProductEditSubmit from "../../../commons/hooks/customs/useProductEditSubmit";
import ProductsButton from "../../../commons/buttons/product/product.index";
import { v4 as uuidv4 } from "uuid";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUsedItem";
import ImageUpload from "../../../commons/productsImageUpload/ImageUpload.container";

const ToastEditor = dynamic(
  async () => await import("../../../commons/ToastEditor"),
  {
    ssr: false,
  }
);

export default function ProductsWriteUI(props: IProductWriteUIProps) {
  const editorRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useFormMarketWrite();

  const {
    onClickProductWriteSubmit,
    onChangeFileUrls,
    imageUrls,
    setImageUrls,
  } = useProductWriteSubmit();
  const { onClickProductEditSubmit } = useProductEditSubmit();
  const { data } = useQueryFetchUsedItem();

  const onChangeEditor = (): void => {
    const data = editorRef.current?.getInstance().getMarkdown();

    setValue("contents", data === "<p><br></p>" ? "" : data);
    trigger("contents");
  };

  useEffect(() => {
    const images = props.data?.fetchUseditem.images;
    if (images !== undefined && images !== null) setImageUrls([...images]);
  }, [props.data]);
  return (
    <>
      <S.Wrapper>
        <S.Form
          onSubmit={
            props.isEdit
              ? handleSubmit(onClickProductEditSubmit(imageUrls))
              : handleSubmit(onClickProductWriteSubmit)
          }
        >
          <S.Title_Text>상품 {props.isEdit ? "수정" : "등록"}</S.Title_Text>
          <S.DivideLine></S.DivideLine>
          <S.Contents_Box>
            <li>
              <div>
                <S.Input_Title>상품명</S.Input_Title>
                <ProductsWriteInput
                  type="text"
                  placeholder="상품명을 입력해주세요."
                  register={register("name")}
                  defaultValue={data?.fetchUseditem.name}
                />
              </div>
              <p>{errors.name?.message}</p>
            </li>
            <li>
              <div>
                <S.Input_Title>상품 요약</S.Input_Title>
                <ProductsWriteInput
                  type="text"
                  placeholder="상품요약을 입력해주세요."
                  register={register("remarks")}
                  defaultValue={data?.fetchUseditem.remarks}
                />
              </div>
              <p>{errors.remarks?.message}</p>
            </li>
            <li>
              <div>
                <S.Input_Title>상품 내용</S.Input_Title>
                <div>
                  <ToastEditor
                    contents=""
                    editorRef={editorRef}
                    onChangeEditor={onChangeEditor}
                    placeholder="상품을 설명해주세요."
                    defaultValue={data?.fetchUseditem.contents}
                  />
                </div>
              </div>
              <p>{errors.contents?.message}</p>
            </li>
            <li>
              <div>
                <S.Input_Title>판매 가격</S.Input_Title>
                <ProductsWriteInput
                  type="text"
                  placeholder="판매 가격을 입력해주세요."
                  register={register("price")}
                  defaultValue={data?.fetchUseditem.price}
                />
              </div>
              <p>{errors.price?.message}</p>
            </li>
            <li>
              <div>
                <S.Input_Title>태그 입력</S.Input_Title>
                <ProductsWriteInput
                  type="text"
                  placeholder="#태그 #태그 #태그"
                  register={register("tags")}
                  defaultValue={data?.fetchUseditem.tags}
                />
              </div>
            </li>
            <li>
              <S.Input_Title>거래 위치</S.Input_Title>
              <S.Location_Box>
                <li>
                  <S.Map_Box>
                    <KakaoMapPage />
                  </S.Map_Box>
                </li>
                <S.Address_Box>
                  <li>
                    <div>
                      <input type="text" disabled={true} />
                      <button>우편번호 검색</button>
                    </div>
                    <div>
                      <ProductsWriteInput type="text" />
                    </div>
                    <div>
                      <ProductsWriteInput type="text" />
                    </div>
                  </li>
                </S.Address_Box>
              </S.Location_Box>
            </li>
            <li>
              <S.Input_Title>사진 첨부</S.Input_Title>
              <S.Img_Box>
                {imageUrls.map((el, index) => (
                  <ImageUpload
                    key={uuidv4()}
                    index={index}
                    imageUrl={el}
                    onChangeFileUrls={onChangeFileUrls}
                  />
                ))}
              </S.Img_Box>
            </li>
          </S.Contents_Box>
          <S.DivideLine></S.DivideLine>
          <S.Button_Box>
            <li>
              <Link href="/main/products">
                <a>
                  <ProductsButton title="취소" isActive={true} />
                </a>
              </Link>
              <ProductsButton
                title={props.isEdit ? "수정" : "등록"}
                isActive={false}
              />
            </li>
          </S.Button_Box>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
