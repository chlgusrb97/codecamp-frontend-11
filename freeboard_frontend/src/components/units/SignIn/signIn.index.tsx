import * as S from "./signIn.styles";
import SignInInput from "../../commons/inputs/signIn/signInInput.index";
import SignInButton from "../../commons/buttons/signIn/signInButton.index";
import useFormSignIn from "../../commons/react_hook_form/useFormSignIn";
import useSignInSubmit from "../../commons/customs/useSignIn/useSignInSubmit";

export default function SignInUI() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormSignIn();

  const { onClickSignInSubmit } = useSignInSubmit();

  return (
    <>
      <S.Wrapper>
        <S.Video autoPlay muted playsInline loop={true}>
          <source src="/img/main/main_video.mp4" type="video/mp4" />
        </S.Video>
        <S.Container>
          <S.SignForm onSubmit={handleSubmit(onClickSignInSubmit)}>
            <S.Title>로그인</S.Title>

            <SignInInput
              type="text"
              placeholder="이메일을 입력해주세요."
              register={register("email")}
            />
            <S.Error_Message>{errors.email?.message}</S.Error_Message>
            <SignInInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={register("password")}
            />
            <S.Error_Message>{errors.password?.message}</S.Error_Message>
            <SignInButton title="로그인" isActive={isValid} />
          </S.SignForm>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
