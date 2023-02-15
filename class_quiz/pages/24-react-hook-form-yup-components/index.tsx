import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import Input01 from "../../src/components/commons/input01";
import Button01 from "../../src/components/commons/button01";

interface IReactHookFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

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
        작성자: <Input01 type="text" register={register("writer")} />
        <div style={{ color: "red" }}>{errors.writer?.message}</div>
        비밀번호: <Input01 type="text" register={register("password")} />
        <div style={{ color: "red" }}>{errors.password?.message}</div>
        제목: <Input01 type="text" register={register("title")} />
        <div style={{ color: "red" }}>{errors.title?.message}</div>
        내용: <Input01 type="text" register={register("contents")} />
        <div style={{ color: "red" }}>{errors.contents?.message}</div>
        <Button01 title="등록하기" isActive={isValid} />
      </form>
    </>
  );
}
