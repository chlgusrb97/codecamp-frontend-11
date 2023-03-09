import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  > p {
    width: 100%;
    background-color: #ddd;
    font-size: 24px;
    font-family: NotoSans-Regular;
    margin-top: 20px;
    background-color: #fff;
    margin-bottom: 36px;
  }
`

export const Header_Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  > img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #c4c4c4;
    margin-right: 15px;
  }
`

export const title = styled.h3`
  font-size: 24px;
  font-family: NotoSans-Regular;
`

export const Date = styled.span`
  font-size: 15px;
  font-family: NotoSans-Regular;
`

export const Header_Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    cursor: pointer;
  }

  > img:last-of-type {
    margin-left: 16px;
  }
`

export const Edit_Box = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  

  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    > textarea {
    width: 100%;
    background-color: #e9e9e9;
    font-size: 24px;
    font-family: NotoSans-Regular;
    resize: none;
    outline: none;
    padding: 19px 15px;
    height: 147px;
    margin-bottom: 11px;
  }

    > button {
      width: 116px;
      height: 42px;
      line-height: 42px;
      font-size: 20px;
      font-family: NotoSans-Bold;
      cursor: pointer;
    }

    > button:first-of-type {
      border: 1px solid #000;
      background-color: #fff;
    }

    > button:last-of-type {
      background-color: #ffe004;
      margin-left: 5px;
    }
  }

`