import styled from "@emotion/styled";
import { IProps } from "./payment.types";


export const Wrapper = styled.div`
  position: fixed;
  display: ${(props: IProps) => props.show ? "flex" : "none"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

export const Payment_Box = styled.div`
  position: relative;
  width: 464px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 76px 40px 40.5px;
  border-radius: 20px;

  > img {
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
      font-size: 20px;
      font-family: NotoSans-Bold;
      margin-bottom: 43px;
    }

    > button {
      width: 100%;
      padding: 14px 16px;
      font-size: 16px;
      margin-top: 40.5px;
      color: #fff;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`

export const Input_Box = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  border-bottom: 2px solid #000;

  > img {
    position: absolute;
    right: 5px;
    margin-top: 7px;
    cursor: pointer;
  }

  > input {
    width: 100%;
    height: 100%;
    padding: 14px 5px;
    background-color: #fff;

      ::placeholder {
        font-size: 16px;
        font-family: NotoSans-Regular;
      }
  }
`

export const Price_Box = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: 17px;

  > li {
    padding: 16px 16px;
    cursor: pointer;
    color: #e0e0e0;
    background-color: #fff;

    :hover {
      color: #000;
    }

    :not(:last-of-type) {
      border-bottom: 1px solid #e0e0e0;
    }
  }
`