import useOnClickDeleteQuestion from "../../../../commons/hooks/customs/useOnClickDeleteQuestion";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./productsComment.list.styles";
import { IProductsCommentListItemUIProps } from "./productsComment.list.types";
import useOnClickEditQuestion from "../../../../commons/hooks/customs/useOnClickEditQuestion";
import useFormProductsDetailComment from "../../../../commons/useForm/useFormProductsDetailComment";
import { useState } from "react";
import ProductsQuestionAnswerWriteUI from "../../commentQuestion/write/questionAnswer.write.index";
import ProductsQuestionAnswerListUI from "../../commentQuestion/list/questionAnswer.list.index";

export default function ProductsCommentListItemUI(
  props: IProductsCommentListItemUIProps
) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useFormProductsDetailComment();

  const { onClickDeleteQuestion } = useOnClickDeleteQuestion();
  const { onClickEditQuestion, isEdit, setIsEdit } = useOnClickEditQuestion();

  const onClickIsEdit = () => {
    setIsEdit(true);
  };

  const onClickCancle = () => {
    setIsEdit(false);
  };

  const onClickQuestionAnswer = () => {
    setIsOpen((prev) => !prev);
  };

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
              <button onClick={onClickQuestionAnswer}>대댓글</button>
              <img src="/img/edit.png" onClick={onClickIsEdit} />
              <img
                src="/img/delete.png"
                onClick={onClickDeleteQuestion(props.el._id)}
              />
            </S.Header_Right>
          </div>
          <p>{props.el.contents}</p>
          {isOpen ? <ProductsQuestionAnswerWriteUI id={props.el._id} /> : <></>}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ProductsQuestionAnswerListUI id={props.el._id} />
          </div>
        </>
      ) : (
        <S.Edit_Box onSubmit={handleSubmit(onClickEditQuestion(props.el))}>
          <div>
            <textarea
              {...register("contents")}
              defaultValue={props.el.contents}
            ></textarea>
          </div>
          <div>
            <button type="button" onClick={onClickCancle}>
              취소하기
            </button>
            <button>수정하기</button>
          </div>
        </S.Edit_Box>
      )}
    </>
  );
}
