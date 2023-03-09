import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 65px 0  84px;
`;

export const Form = styled.form`
  width: 1372px;
`
export const Title_Text = styled.h2`
  font-size: 40px;
  font-family: NotoSans-Bold;
  margin-bottom: 42px;
`

export const Contents_Box = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 39px 0 45px;

  > li {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    :not(:last-child) {
      margin-bottom: 39px;
    }

    :nth-of-type(3) {
      > div {
        align-items: flex-start;

        span {
          margin-top: 15px;
        }
      }
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      > div {
        width: 100%;
      }
    }

    > p {
      margin-top: 5px;
      margin-left: 217px;
      color: tomato
    } 
  }
`

export const Input_Title = styled.span`
  width: 260px;
  font-size: 24px;
`

export const Location_Box = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 36px;
`

export const Map_Box = styled.div`
  width: 384px;
  height: 252px;
  background-color: gray;
  margin-right: 26px;
`

export const Address_Box = styled.ul`
  width: 100%;

  > li {
    display: flex;
    flex-direction: column;
    
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;

      :not(:last-child) {
        margin-bottom: 24px;
      }

      :first-of-type > input {
        width: 77px;
        padding: 14px 16px;
        background-color: #fff;
        border: 1px solid #bdbdbd;
        margin-right: 16px;
        
        ::placeholder {
          color: #bdbdbd
        }
      }

      > button {
        padding: 14px 16px;
        background-color: #000;
        color: #fff;
        font-size: 16px;
      }
    }
  }
`

export const Img_Box = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 47px;

  > li {
    width: 180px;
    height: 180px;
    background-color: #bdbdbd;
    margin-right: 24px;
    cursor: pointer;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Button_Box = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 73px;

  > li {
    > button {

      :first-of-type {
        margin-right: 8px;
      }
      
      :last-child {
        margin-left: 8px;
      }
    }
  }
`

export const DivideLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #555; 
`