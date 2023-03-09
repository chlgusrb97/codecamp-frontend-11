// import styled from "@emotion/styled";
// import { IProps } from "./header.types";

// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
// `;
// export const Header_Section = styled.div`
//   position: fixed;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: 100px;
//   padding: 0 40px;
//   color: #eee;
//   transition: all 0.3s ease-in-out;
//   z-index: 1;

//   :hover {
//     background-color: rgba(0, 0, 0, 0.3);
//   }
// `;

// export const Logo = styled.span`
//   cursor: pointer;
//   font-family: Kanit-Bold;
//   font-size: 46px;
//   margin-right: 100px;
// `;

// export const Menu = styled.ul`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   li {
//     cursor: pointer;
//     font-family: Kanit-Light;
//     font-size: 18px;

//     :not(:first-of-type) {
//       margin-right: 50px;
//     }
//     a {
//       cursor: pointer;
//       font-family: Kanit-Light;
//       font-size: 18px;
//       color: #eee;
//       text-decoration: none;
//     }
//   }
// `;

// export const Right_Header = styled.ul`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-right: 50px;

//   li {
//     font-family: NaNum-Bold;
//     font-size: 12px;
//     margin-left: 15px;
//     cursor: pointer;
//     transition: all 0.3 ease-in-out;

//     :hover {
//       text-decoration: underline;
//     }
//   }
// `;

// export const HamburgerBox = styled.div`
//   position: fixed;
//   top: 26px;
//   right: 26px;
//   z-index: 2;
//   cursor: pointer;
//   margin-left: 30px;
// `;

// export const Menu_Box = styled.div`
//   position: fixed;
//   width: 350px;
//   height: 100%;
//   right: ${(props: IProps) => (props.isOpen ? "0px" : "-350px")};
//   z-index: 1;
//   background-color: rgba(0, 0, 0, 0.8);
//   transition: all 0.3s ease-in-out;
// `;

// export const Ul = styled.ul`
//   color: #eee;

//   li {
//     font-size: 40px;
//     cursor: pointer;
//   }
// `;

// export const UserName = styled.a`
//   font-size: 12px;
//   cursor: pointer;
// `;

import styled from "@emotion/styled";
import { IProps } from "./header.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 257px;
`;

export const Header_Section_01 = styled.ul`
  margin: 0 auto;
  width: 1374px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  > li {
    margin-left: 30px;

    > a {
      color: #000;
      text-decoration: none;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        > div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          background-color: #ffe004;
          border-radius: 20px;
          margin-left: 5px;
          margin-top: 2px;

          > span {
            margin-bottom: 2px;
            color: #fff;
            font-size: 12px;
            font-family: NotoSans-Regular;
          }
        }
      }
    }
  }
`;

export const Header_Section_02 = styled.ul`
  margin: 0 auto;
  width: 1374px;
  height: 155px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    > span {
      font-size: 24px;
      color: #000;
      margin-left: 11px;
    }
  }
`;

export const User = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Roboto-Medium;
`;

export const Point = styled.span`
  font-family: Roboto-Bold;
  text-decoration: underline;
  margin-left: 10px;
`;

export const Payment = styled.span`
  text-decoration: underline;
  font-family: Roboto-Medium;
  cursor: pointer;
`;

export const Logout_Button = styled.span`
  cursor: pointer;
`;

export const DevideLine = styled.div`
  width: 100%;
  border-top: 1px solid #555;
`;
