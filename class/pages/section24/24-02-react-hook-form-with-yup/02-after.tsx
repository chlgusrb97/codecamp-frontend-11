import { useForm } from "react-hook-form";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./02-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  email: string;
  password: string;
  phone: number;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링 확인");

  // 한 줄일때는 괄호() 필요없음
  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{formState.errors.contents?.message}</div>
      이메일: <input type="text" {...register("email")} />
      <div style={{ color: "red" }}>{formState.errors.email?.message}</div>
      비밀번호: <input type="text" {...register("password")} />
      <div style={{ color: "red" }}>{formState.errors.password?.message}</div>
      휴대폰 번호: <input type="text" {...register("phone")} />
      <div style={{ color: "red" }}>{formState.errors.phone?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        GRAPHQL-API 요청하기
      </button>
    </form>
  );
}

/* 
    <button type='button' onClick={onClickBasket}>장바구니담기</button> 
    // 기본값이 submit이기 때문에onSubmit이 실행된다.

    <button type="reset">지우자!!!</button>
    <button type="submit">등록하자!!!</button>  // 기본값
*/
