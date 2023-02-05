import styled from "@emotion/styled";

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

export default function MainPage() {
  return (
    <>
      <Wrapper>
        <Video autoPlay muted playsInline loop={true}>
          <source src="/img/main/background_video01.mp4" type="video/mp4" />
        </Video>
      </Wrapper>
    </>
  );
}
