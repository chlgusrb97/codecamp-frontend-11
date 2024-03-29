import * as yup from "yup";

export const SignUpSchema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일을 입력해 주세요."),
  name: yup.string().required("이름을 입력해 주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해 주세요")
    .min(8, "비밀번호는 8글자 이상 작성해 주세요."),
  passwordCheck: yup
    .string()
    .required("비밀번호를 입력해 주세요")
    .min(8, "비밀번호는 8글자 이상 작성해 주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
