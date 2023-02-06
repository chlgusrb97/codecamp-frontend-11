import styled from "@emotion/styled";

export const HamburgetBox = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
  margin: 60px 60px 0 0;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 500px;
  height: 100%;
  right: ${(props) => (props.isOpen ? "0px" : "-500px")};
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
`;
