import * as S from "./join.styles";
import useFormSignUp from "../../commons/useForm/useFormSignUp";
import useJoinSubmit from "../../commons/hooks/customs/useSignUpSubmit";
import Link from "next/link";
import JoinInput from "../../commons/inputs/join/JoinInput.index";
import JoinButton from "../../commons/buttons/join/joinButton.index";

export default function JoinUI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSignUp();

  const { onClickSignUpSubmit } = useJoinSubmit();

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
        <S.JoinForm onSubmit={handleSubmit(onClickSignUpSubmit)}>
          <S.Title_List>
            <h1>회원가입</h1>
            <h2>Sign up</h2>
          </S.Title_List>
          <S.Contents_List>
            <li>
              <ul>
                <span>아이디</span>
                <JoinInput
                  type="text"
                  placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
                  register={register("email")}
                />
              </ul>
              <S.Error_Message>{errors.email?.message}</S.Error_Message>
            </li>
            <li>
              <ul>
                <span>비밀번호</span>
                <JoinInput
                  type="password"
                  placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                  register={register("password")}
                />
              </ul>
              <S.Error_Message>{errors.password?.message}</S.Error_Message>
            </li>
            <li>
              <ul>
                <span>비밀번호 확인</span>
                <JoinInput
                  type="password"
                  placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                  register={register("passwordCheck")}
                />
              </ul>
              <S.Error_Message>{errors.passwordCheck?.message}</S.Error_Message>
            </li>
            <li>
              <ul>
                <span>이름</span>
                <JoinInput
                  type="text"
                  placeholder="Ex) 홍길동"
                  register={register("name")}
                />
              </ul>
              <S.Error_Message>{errors.name?.message}</S.Error_Message>
            </li>
            <li>
              <div>
                <div>
                  <JoinButton title="회원가입하기" isActive={true} />
                </div>
                <div>
                  <Link href="/main">
                    <a>                      
                      <JoinButton title="취소" isActive={false} />
                    </a>
                  </Link>
                </div>
              </div>
            </li>
            <li>이미 아이디가 있으신가요?
              <Link href="/main/login">
                <a>
                  <p>로그인</p>
                </a>
              </Link>
            </li>
          </S.Contents_List>
        </S.JoinForm>
      </S.Wrapper>
    </>
  );
}
