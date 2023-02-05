import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  width: 600px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 200px;
  top: 100px;
  left: 50%;
`;

const GnbUl = styled.ul``;

const GnbLi = styled.li`
  color: #eee;
  font-size: 2.5rem;
`;

export default function LayoutNavigation() {
  return (
    <>
      <Wrapper>
        <Container>
          <Logo src="/img/main/NM-logo-white.png" />
          <GnbUl>
            <GnbLi>FACE</GnbLi>
            <GnbLi>LIP</GnbLi>
            <GnbLi>EYE</GnbLi>
            <GnbLi>TOOL</GnbLi>
          </GnbUl>
        </Container>
      </Wrapper>
    </>
  );
}
