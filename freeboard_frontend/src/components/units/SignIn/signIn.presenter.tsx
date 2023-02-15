import * as S from "./signIn.styles";

export default function SignInUI() {
  return (
    <>
      <S.Wrapper>
        <S.Video autoPlay muted playsInline loop={true}>
          <source src="/img/main/main_video.mp4" type="video/mp4" />
        </S.Video>
        <S.Container>
          <S.SignForm>1</S.SignForm>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
