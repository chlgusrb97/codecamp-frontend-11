import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Video = styled.video`
  position: fixed;
  width: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Logo = styled.img`
  cursor: pointer;
`;

export default function MainPage() {
  const router = useRouter();

  const onClickMoved = () => {
    router.push("/main/boards");
  };
  return (
    <>
      <Wrapper>
        <Video autoPlay muted playsInline loop={true}>
          <source src="/img/main/background_video.mp4" type="video/mp4" />
        </Video>
        <Container>
          <Logo src="/img/main/NM-logo-white.png" onClick={onClickMoved} />
        </Container>
      </Wrapper>
    </>
  );
}
