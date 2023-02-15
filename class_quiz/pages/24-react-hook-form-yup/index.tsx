import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IReactHookFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "5글자 이내로 작성해 주세요.")
    .required("작성자를 입력해 주세요"),

  password: yup
    .string()
    .max(8, "8글자 이내로 작성해 주세요.")
    .required("비밀번호를 입력해 주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{0,8}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이내 문자열입니다"
    ),

  title: yup
    .string()
    .max(100, "100자 이내로 작성해 주세요.")
    .required("제목을 입력해 주세요"),
  contents: yup
    .string()
    .max(1000, "1000자 애니로 작성해 주세요.")
    .required("내용을 입력해 주세요"),
});

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IReactHookFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IReactHookFormData) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input {...register("writer")} placeholder="작성자" />
        <div style={{ color: "red" }}>{errors.writer?.message}</div>

        <input {...register("password")} placeholder="비밀번호" />
        <div style={{ color: "red" }}>{errors.password?.message}</div>

        <input {...register("title")} placeholder="제목" />
        <div style={{ color: "red" }}>{errors.title?.message}</div>

        <input {...register("contents")} placeholder="내용" />
        <div style={{ color: "red" }}>{errors.contents?.message}</div>

        <button style={{ backgroundColor: isValid ? "yellow" : "" }}>
          게시물 등록하기
        </button>
      </form>
    </>
  );
}
