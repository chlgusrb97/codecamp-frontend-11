import useOnClickDeleteQuestion from "../../../../commons/hooks/customs/useOnClickDeleteQuestion"
import { getDate } from "../../../../../commons/libraries/utils"
import * as S from "./productsComment.list.styles"
import { IProductsCommentListItemUIProps } from "./productsComment.list.types"
import useOnClickEditQuestion from "../../../../commons/hooks/customs/useOnClickEditQuestion"
import useFormProductsDetailComment from "../../../../commons/useForm/useFormProductsDetailComment";

export default function ProductsCommentListItemUI(props: IProductsCommentListItemUIProps) {

  const {register, handleSubmit, setValue} = useFormProductsDetailComment()

  const { onClickDeleteQuestion } = useOnClickDeleteQuestion()
  const { onClickEditQuestion, isEdit, setIsEdit } = useOnClickEditQuestion()

  const onClickIsEdit = () => {
    setIsEdit(true)
  }

  const onClickCancle = () => {
    setIsEdit(false)
  }

  return (
    <>
      {!isEdit ? (
        <>
          <div>
            <S.Header_Left>
              <img />
              <div>
                <S.title>{props.el.user.name}</S.title>
                <S.Date>{getDate(props.el.createdAt)}</S.Date>
              </div>
              </S.Header_Left>
              <S.Header_Right>
                <img src="/images/edit.png" onClick={onClickIsEdit} />
                <img src="/images/delete.png" onClick={onClickDeleteQuestion(props.el._id)} />
              </S.Header_Right>
            </div>
          <p>{props.el.contents}</p>
        </>
      ) : (
        <S.Edit_Box onSubmit={handleSubmit(onClickEditQuestion(props.el))}>
          <div>
            <textarea {...register("contents")} defaultValue={props.el.contents}></textarea>
          </div>
          <div>
            <button type="button" onClick={onClickCancle}>취소하기</button>
            <button>수정하기</button>
          </div>
        </S.Edit_Box>
      )}
    </>
  )
}