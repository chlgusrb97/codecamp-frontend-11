import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 219px;
  right: 80px;
  width: 155px;
  border: 1px solid #000;
  padding: 28px 32px 32px;
  background-color: #fff;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > div {
      width: 85px;
      height: 85px;
      background-color: #c4c4c4;
      cursor: pointer;
    }

    > div:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  > li:first-of-type {
    font-size: 16px;
    margin-bottom: 22px;
  }
`