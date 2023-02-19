import styled from "@emotion/styled";
import { IProps } from "./header.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Header_Section = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  color: #eee;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const Logo = styled.span`
  cursor: pointer;
  font-family: Kanit-Bold;
  font-size: 46px;
  margin-right: 100px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  li {
    cursor: pointer;
    font-family: Kanit-Light;
    font-size: 20px;

    :not(:first-of-type) {
      margin-right: 50px;
    }
  }
`;

export const Right_Header = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;

  li {
    font-family: NaNum-Bold;
    font-size: 12px;
    margin-left: 15px;
    cursor: pointer;
    transition: all 0.3 ease-in-out;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const HamburgerBox = styled.div`
  position: fixed;
  top: 26px;
  right: 26px;
  z-index: 2;
  cursor: pointer;
  margin-left: 30px;
`;

export const Menu_Box = styled.div`
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

export const UserName = styled.span``;
