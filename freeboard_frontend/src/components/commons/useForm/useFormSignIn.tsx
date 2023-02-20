import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignInSchema } from "../../../commons/libraries/validation/signIn";
import { ISignInFormData } from "../../units/signIn/signIn.types";

export default function useFormSignIn() {
  const result = useForm<ISignInFormData>({
    resolver: yupResolver(SignInSchema),
    mode: "onChange",
  });

  return result;
}
