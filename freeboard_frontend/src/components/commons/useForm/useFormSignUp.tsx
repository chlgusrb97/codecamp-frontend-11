import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { JoinSchema } from "../../../commons/libraries/validation/join";
import { IJoinFormData } from "../../units/join/join.types";

export default function useFormSignUp() {
  const result = useForm<IJoinFormData>({
    resolver: yupResolver(JoinSchema),
    mode: "onChange",
  });

  return result;
}
