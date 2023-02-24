import useProductWriteSubmit from "../../../commons/hooks/customs/useMarketWrite/useMarketWriteSubmit";
import ProductWriteInput from "../../../commons/inputs/productWrite/productWriteInput.index";
import useFormMarketWrite from "../../../commons/useForm/useFormMarketWrite";
import * as S from "./product.write.styles";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import KakaoMapPage from "../../../commons/kakakoMap";
import ProductWriteButton from "../../../commons/buttons/productWrite/productWrite.index";
import Link from "next/link";

export default function ProductWriteUI() {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useFormMarketWrite();

  const { onClickProductWriteSubmit } = useProductWriteSubmit();

  const ToastEditor = dynamic(
    async () => await import("../../../commons/ToastEditor"),
    {
      ssr: false,
    }
  );

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br><p>" ? "" : value);

    void trigger("contents");
  };

  return (
    <>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onClickProductWriteSubmit)}>
          <S.Section>
            <S.title>상품등록</S.title>
            <li>
              <S.Input_title>상품이름</S.Input_title>
              <S.Box>
                <ProductWriteInput
                  type="text"
                  placeholder="상품이름을 입력해주세요."
                  register={register("name")}
                  length={40}
                  disabled={false}
                />
                <S.LengthBox>
                  {watch("name") ? watch("name").length : "0"}/40
                </S.LengthBox>
              </S.Box>
            </li>
            <p>{errors.name?.message}</p>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>상품소개</S.Input_title>
              <ProductWriteInput
                type="text"
                placeholder="상품소개를 입력해주세요."
                register={register("remarks")}
                length={200}
                disabled={false}
              />
            </li>
            <p>{errors.remarks?.message}</p>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>상세설명</S.Input_title>
              <div style={{ width: "100%" }}>
                <ToastEditor
                  height={"600px"}
                  onChangeContents={onChangeContents}
                />
              </div>
            </li>
            <p>{errors.contents?.message}</p>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>태그</S.Input_title>
              <ProductWriteInput
                type="text"
                placeholder="태그를 입력해주세요."
                register={register("tags")}
                length={200}
                disabled={false}
              />
            </li>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>가격</S.Input_title>
              <S.Box>
                <ProductWriteInput
                  type="text"
                  placeholder="가격을 입력해주세요. (숫자만 입력 가능)"
                  register={register("price")}
                  length={1000}
                  disabled={false}
                />
              </S.Box>
            </li>
            <p>{errors.price?.message}</p>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>거래 희망 위치</S.Input_title>
              <S.AddressBox>
                <li>
                  <S.Map_Box>
                    <KakaoMapPage />
                  </S.Map_Box>
                </li>
                <li>
                  <div>
                    <button>주소 검색</button>
                    <S.Input_Box>
                      <ProductWriteInput
                        type="text"
                        placeholder="주소"
                        register={register("useditemAddress.address")}
                        length={1000}
                        disabled={true}
                      />
                    </S.Input_Box>
                    <S.Input_Box>
                      <ProductWriteInput
                        type="text"
                        placeholder="상세주소"
                        register={register("useditemAddress.addressDetail")}
                        length={1000}
                        disabled={true}
                      />
                    </S.Input_Box>
                  </div>
                </li>
              </S.AddressBox>
            </li>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>상품이미지</S.Input_title>
              <S.Img_Box>
                <li></li>
                <li></li>
                <li></li>
              </S.Img_Box>
            </li>
            <S.divideLine></S.divideLine>
            <li>
              <S.Input_title>메인 이미지 선택</S.Input_title>
              <S.Radio_Box>
                <li>
                  <input type="radio" name="select_Img" />
                  <label>이미지 1</label>
                </li>
                <li>
                  <input type="radio" name="select_Img" />
                  <label>이미지 2</label>
                </li>
                <li>
                  <input type="radio" name="select_Img" />
                  <label>이미지 3</label>
                </li>
              </S.Radio_Box>
            </li>
          </S.Section>
          <S.ProductButton_Box>
            <Link href="/main/products">
              <a>
                <ProductWriteButton title="취소하기" type="button" />
              </a>
            </Link>
            <ProductWriteButton title="등록하기" />
          </S.ProductButton_Box>
        </S.Form>
      </S.Wrapper>
    </>
  );
}