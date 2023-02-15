import styled from "@emotion/styled";
import { IProps } from "./navigation.types";

export const HamburgetBox = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
  margin: 26px 32px 0 0;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 350px;
  height: 100%;
  right: ${(props: IProps) => (props.isOpen ? "0px" : "-350px")};
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in-out;
`;

export const Ul = styled.ul`
  color: #eee;

  li {
    font-size: 40px;
    cursor: pointer;
  }
`;
