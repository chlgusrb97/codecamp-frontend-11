import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../../commons/libraries/validation/login";
import { ILoginFormData } from "../../units/login/login.types";


export default function useFormSignIn() {
  const result = useForm<ILoginFormData>({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  return result;
}
