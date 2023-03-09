import { useForm } from "react-hook-form";
import { ICreateUseditemInput } from "../../../commons/types/generated/types";

export default function useFormMarketWrite() {
  const result = useForm<ICreateUseditemInput>({
    mode: "onChange",
  });
  return result;
}
