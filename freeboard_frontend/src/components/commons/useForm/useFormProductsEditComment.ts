import { useForm } from "react-hook-form";
import { IUpdateUseditemQuestionInput } from "../../../commons/types/generated/types";

export const useFormProductsEditComment = () => {
  const result = useForm<IUpdateUseditemQuestionInput>({
    mode: "onChange",
  });
  return result;
}
