import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 71px 0 84px;
`;

export const Container = styled.div`
  width: 1372px;
  display: flex;
  flex-direction: column;
`

export const Section_01 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Section_01_Left = styled.div`
  width: 480px;
  height: 480px;
  background-color: #a0a0a0;
  margin-right: 68px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const Section_01_Right = styled.div`
  width: calc(100% - 548px);
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Name_Box = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > li:first-of-type {
    
    h2 {
      font-size: 24px;
      font-family: NotoSans-Bold;
    }
  }

  > li:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      cursor: pointer;
    }

    img:last-child {
      margin-left: 16px;
    }
  }
`

export const Contents_Box = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #c0c0c0;

  > li:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      font-size: 40px;
    }

    span {
      margin-top: 10px;
      margin-left: 8px;
      font-size: 20px;
      font-family: NotoSans-Regular;
    }
  }

  > li:nth-of-type(2) {
    width: 100%;
  }
`

export const P_Box = styled.div`
  width: 100%;
  padding: 20px 10px;
  height: 130px;

  p {
    font-size: 20;
    font-family: NotoSans-Regular;
  }
`

export const Tag_Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 14px 0 32px;

  p {
    padding: 7px 17px;
    background-color: #ffe004;
    border-radius: 12px;
    font-size: 16px;
    font-family: NotoSans-Regular;
    margin-right: 10px;
  }
`

export const Button_Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
`

export const Pick_Button = styled.button`
  width: 152px;
  height: 100px;
  background-color: #c9c9c9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    color: #fff;
    margin-right: 5px;
  }

  span {
    color: #fff;
    font-size: 30px;
    font-family: NotoSans-Bold;
  }
`

export const Section_02 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 87px;
`

export const Section_02_Left = styled.div`
  width: 962px;
`

export const Text_box = styled.div`
  width: 100%;
  padding: 30px 40px;


  p {
    font-size: 20;
    font-family: NotoSans-Regular;
    margin: 0;
    word-break:break-all;
  }
`

export const Map_Box = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > li:first-of-type {
    width: 860px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;

    img {
      margin-right: 10px;
    }

    span {
      font-size: 24px;
    }
  }

  > li:nth-of-type(2) {
    width: 860px;
    height: 448px;
    background-color: #ddd;
  }
`

export const Section_02_Right = styled.div`
  width: calc(100% - 962px);
  border-left: 1px solid #555;
  padding-left: 31px;
  margin-left: 37px;
`

export const User_Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 20px;
  border-bottom: 1px solid #555;
  margin-bottom: 76px;

  div {
    width: 75px;
    height: 75px;
    border-radius: 75px;
    background-color: #c4c4c4;
    margin-right: 33px;
  }

  span {
    font-size: 32px;
    font-family: NotoSans-Regular
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-family: NotoSans-Bold;
`

export const DivideLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #555;
  margin-top: 20px;
`