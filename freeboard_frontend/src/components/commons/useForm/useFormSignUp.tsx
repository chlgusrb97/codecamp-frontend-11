import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../../commons/libraries/validation/signUp";
import { ISignUpFormData } from "../../units/SignUp/signUp.types";

export default function useFormSignUp() {
  const result = useForm<ISignUpFormData>({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  return result;
}
