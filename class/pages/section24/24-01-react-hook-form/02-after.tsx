import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  console.log("리렌더링 확인");

  // 한 줄일때는 괄호() 필요없음
  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

/* 
    <button type='button' onClick={onClickBasket}>장바구니담기</button> 
    // 기본값이 submit이기 때문에onSubmit이 실행된다.

    <button type="reset">지우자!!!</button>
    <button type="submit">등록하자!!!</button>  // 기본값
*/
