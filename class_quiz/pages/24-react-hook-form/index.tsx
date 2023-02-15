import { useForm } from "react-hook-form";

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
    formState: { errors },
  } = useForm<IReactHookFormData>();

  const onClickSubmit = (data: IReactHookFormData) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <input
          {...register("writer", { required: true })}
          placeholder="작성자"
        />
        <div style={{ color: "red" }}>
          {errors.writer && "작성자를 입력해주세요."}
        </div>

        <input
          {...register("password", { required: true })}
          placeholder="비밀번호"
        />
        <div style={{ color: "red" }}>
          {errors.password && "비밀번호를 입력해주세요."}
        </div>

        <input {...register("title", { required: true })} placeholder="제목" />
        <div style={{ color: "red" }}>
          {errors.title && "제목을 입력해주세요."}
        </div>

        <input
          {...register("contents", { required: true })}
          placeholder="내용"
        />
        <div style={{ color: "red" }}>
          {errors.contents && "내용을 입력해주세요."}
        </div>

        <button>게시물 등록하기</button>
      </form>
    </>
  );
}
