import useOnClickCreateQuestionAnswer from "../../../../commons/hooks/customs/useOnClickCreateQuestionAnswer";
import useFormProductsDetailCommentAnswer from "../../../../commons/useForm/useFormProductsDetailCommentAnswer";
import { IQuestionAnswerWriteUIProps } from "./questionAnswer.write.types";

export default function ProductsQuestionAnswerWriteUI(
  props: IQuestionAnswerWriteUIProps
) {
  const { register, handleSubmit, setValue } =
    useFormProductsDetailCommentAnswer();

  const { onClickCreateQuestionAnswer, isOpen } =
    useOnClickCreateQuestionAnswer();

  return (
    <>
      {!isOpen && (
        <form
          onSubmit={handleSubmit(
            onClickCreateQuestionAnswer(setValue)(props.id)
          )}
        >
          <input
            style={{ backgroundColor: "antiquewhite", height: "60px" }}
            {...register("contents")}
          />
          <button style={{ height: "60px", cursor: "pointer" }}>등록</button>
        </form>
      )}
    </>
  );
}
