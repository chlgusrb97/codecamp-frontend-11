import * as yup from "yup";

export const JoinSchema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력하세요.")
    .required("이메일을 입력해 주세요."),
  name: yup.string().required("이름을 입력해주세요."),
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력해주세요.")
    .matches(/^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,15}$/, 
    "영문+숫자 조합 8~16자리를 입력해주세요."),
  passwordCheck: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력해주세요.")
    .matches(/^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,15}$/, 
    "영문+숫자 조합 8~16자리를 입력해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
