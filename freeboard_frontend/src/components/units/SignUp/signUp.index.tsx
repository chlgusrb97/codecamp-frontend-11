import * as S from "./signUp.styles";
import SignUpInput from "../../commons/inputs/signUp/signUpInput.index";
import SignUpButton from "../../commons/buttons/signUp/signUpButton.index";
import useFormSignUp from "../../commons/react_hook_form/useFormSignUp";
import useSignUpSubmit from "../../commons/customs/useSignUp/useSignUpSubmit";

export default function SignUpUI() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormSignUp();

  const { onClickSignUpSubmit } = useSignUpSubmit();

  return (
    <>
      <S.Wrapper>
        <S.Video autoPlay muted playsInline loop={true}>
          <source src="/img/main/main_video.mp4" type="video/mp4" />
        </S.Video>
        <S.Container>
          <S.SignForm onSubmit={handleSubmit(onClickSignUpSubmit)}>
            <S.Title>회원가입</S.Title>

            <SignUpInput
              type="text"
              placeholder="이메일을 입력해주세요."
              register={register("email")}
            />
            <S.Error_Message>{errors.email?.message}</S.Error_Message>
            <SignUpInput
              type="text"
              placeholder="이름을 입력해주세요."
              register={register("name")}
            />
            <S.Error_Message>{errors.name?.message}</S.Error_Message>
            <SignUpInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={register("password")}
            />
            <S.Error_Message>{errors.password?.message}</S.Error_Message>
            <SignUpInput
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              register={register("passwordCheck")}
            />
            <S.Error_Message>{errors.passwordCheck?.message}</S.Error_Message>
            <SignUpButton title="회원가입" isActive={isValid} />
          </S.SignForm>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
