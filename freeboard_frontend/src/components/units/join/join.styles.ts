import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: black;

  img {
  margin: 0 64px;
  cursor: pointer;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 100px);
  background-color: #f8f8f8;
`;

export const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 1200px;
  background-color: #fff;
  padding: 75px 97px;
`;

export const Title_List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 33px;

  > h1 {
    font-size: 50px;
    font-family: NotoSans-Bold;
    margin-right: 50px;
  }
  
  > h2 {
    font-size: 32px;
    font-family: NotoSans-Regular;
  }
`

export const Contents_List = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c9c9c9;
  padding: 97px 0 0;

  > li {
    display: flex;
    flex-direction: column;

    > ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

    > span {
      width: 219px;
      font-size: 24px;
      font-family: NotoSans-Regular;
    }
    }
    

    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      > div {
        :first-of-type {
          margin-right: 10.5px;
        }
        :last-child {
          margin-left: 10.5px;
        }
      }
    }

    p {
      font-size: 18px;
      color: black;
      text-decoration: underline;
      margin-left: 21px;
    }
  }

  > li:not(:nth-of-type(4)) {
    margin-bottom: 30px;
  }

  > li:nth-of-type(5) {
    margin: 87px 0 47px;
  }

  > li:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: NotoSans-Regular;
    color: #888
  }
`

export const Error_Message = styled.span`
  font-size: 16px;
  color: #ef3030;
  font-family: NotoSans-Regular;
  margin-top: 14px;
  margin-left: 177px;
`;
