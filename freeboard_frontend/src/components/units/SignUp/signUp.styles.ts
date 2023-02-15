import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Video = styled.video`
  position: fixed;
  width: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.span`
  color: #eee;
  cursor: pointer;
  font-size: 8rem;
  font-family: Kanit-Bold;
`;

export const P = styled.p`
  color: #eee;
  font-size: 32px;

  font-family: Kanit-Light;
`;
