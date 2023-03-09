import { useForm } from "react-hook-form";
import { ICreateUseditemQuestionInput } from "../../../commons/types/generated/types";
export default function useFormMarketWrite() {
  const result = useForm<ICreateUseditemQuestionInput>({
    mode: "onChange",
  });
  return result;
}
