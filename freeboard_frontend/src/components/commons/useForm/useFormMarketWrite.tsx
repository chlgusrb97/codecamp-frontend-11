import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MarketWriteSchema } from "../../../commons/libraries/validation/marketWrite";
import { ICreateUseditemInput } from "../../../commons/types/generated/types";

export default function useFormMarketWrite() {
  const result = useForm({
    resolver: yupResolver<ICreateUseditemInput>(MarketWriteSchema),
    mode: "onChange",
  });
  return result;
}
