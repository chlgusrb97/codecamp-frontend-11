import useOnclickCreateQuestion from "../../../../commons/hooks/customs/useOnclickCreateQuestion";
import useFormProductsDetailComment from "../../../../commons/useForm/useFormProductsDetailComment";
import * as S from "./productsComment.write.styles";

export default function ProductsCommentWriteUI() {

  const {register, handleSubmit, setValue} = useFormProductsDetailComment()
  
  const {onClickCreateQuestion} = useOnclickCreateQuestion()
  
  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(onClickCreateQuestion(setValue))}>
        <S.Textarea {...register("contents")} />
        <S.Button>작성하기</S.Button>
      </S.Wrapper>
    </>
  )
}