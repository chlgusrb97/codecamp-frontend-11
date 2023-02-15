import * as S from "./signUp.styles";

export default function SignUpUI() {
  return (
    <>
      <S.Wrapper>
        <S.Video autoPlay muted playsInline loop={true}>
          <source src="/img/main/main_video.mp4" type="video/mp4" />
        </S.Video>
        <S.Container></S.Container>
      </S.Wrapper>
    </>
  );
}
