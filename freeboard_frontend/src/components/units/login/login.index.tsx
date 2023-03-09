import * as S from "./login.styles";
import useFormSignIn from "../../commons/useForm/useFormSignIn";
import useSignInSubmit from "../../commons/hooks/customs/useSignInSubmit";
import LoginInput from "../../commons/inputs/login/loginInput.index";
import Link from "next/link";
import LoginButton from "../../commons/buttons/login/loginButton.index";

export default function SignInUI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSignIn();

  const { onClickSignInSubmit } = useSignInSubmit();

  return (
    <>
      <S.Header>
        <Link href="/main">
          <a>
            <img src="/images/logo02.png" />
          </a>
        </Link>
      </S.Header>
      <S.Wrapper>
        <S.LoginForm onSubmit={handleSubmit(onClickSignInSubmit)}>
          <S.Title_List>
            <h1>로그인</h1>
            <h2>Login</h2>
          </S.Title_List>
          <S.Contents_List>
          <li>
            <ul>
              <LoginInput
                type="text"
                placeholder="아이디"
                register={register("email")}
              />
            </ul>
            <S.Error_Message>{errors.email?.message}</S.Error_Message>
          </li>
          <li>
            <ul>
              <LoginInput
                type="password"
                placeholder="비밀번호"
                register={register("password")}
              />
            </ul>
            <S.Error_Message>{errors.password?.message}</S.Error_Message>
          </li>
          <LoginButton title="로그인" />
            <li>아직 계정이 없으신가요?
              <Link href="/main/join">
                <a>
                  <p>회원가입</p>
                </a>
              </Link>
            </li>
          </S.Contents_List>
        </S.LoginForm>
        {/* <S.Container>
          <S.SignForm onSubmit={handleSubmit(onClickSignInSubmit)}>
            <S.Title>로그인</S.Title>

            <LoginInput
              type="text"
              placeholder="이메일을 입력해주세요."
              register={register("email")}
            />
            <S.Error_Message>{errors.email?.message}</S.Error_Message>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              register={register("password")}
            />
            <S.Error_Message>{errors.password?.message}</S.Error_Message>
            <LoginButton title="로그인" isActive={isValid} />
          </S.SignForm>
        </S.Container> */}
      </S.Wrapper>
    </>
  );
}
