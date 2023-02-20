import MarketWriteButton from "../../../commons/buttons/marketWrite/marketWrite.index";
import useMaketWriteSubmit from "../../../commons/hooks/customs/useMarketWrite/useMarketWriteSubmit";
import MarketWriteInput from "../../../commons/inputs/marketWrite/marketWriteInput.index";
import useFormMarketWrite from "../../../commons/useForm/useFormMarketWrite";
import * as S from "./product.write.styles";

export default function MarketWrite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormMarketWrite();
  const { onClickMarketWriteSubmit } = useMaketWriteSubmit();

  return (
    <>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onClickMarketWriteSubmit)}>
          <MarketWriteInput
            type="text"
            placeholder="상품명을 입력해주세요."
            register={register("name")}
          />
          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
          <MarketWriteInput
            type="text"
            placeholder="상품을 소개해주세요."
            register={register("remarks")}
          />
          <MarketWriteInput
            type="text"
            placeholder="상품 상세설명을 입력해주세요."
            register={register("contents")}
          />

          <MarketWriteInput
            type="text"
            placeholder="상품명을 입력해주세요."
            register={register("price")}
          />
          <S.ErrorMessage>{errors.price?.message}</S.ErrorMessage>
          <MarketWriteInput
            type="text"
            placeholder="해시태그을 입력해주세요."
            register={register("tags")}
          />
          <MarketWriteButton title="등록하기" />
        </S.Form>
      </S.Wrapper>
    </>
  );
}
