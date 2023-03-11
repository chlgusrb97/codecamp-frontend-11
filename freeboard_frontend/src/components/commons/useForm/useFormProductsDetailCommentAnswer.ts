import { useForm } from "react-hook-form";
import { ICreateUseditemQuestionAnswerInput } from "../../../commons/types/generated/types";

export default function useFormProductsDetailCommentAnswer() {
  const result = useForm<ICreateUseditemQuestionAnswerInput>({
    mode: "onChange",
  });
  return result;
}
