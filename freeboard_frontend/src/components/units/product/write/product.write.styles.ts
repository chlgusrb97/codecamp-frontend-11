import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  width: 1024px;
  background-color: #fff;
`;

export const Section = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  li {
    font-family: Nanum-Regular;
    font-size: 16px;
    color: #191919;
    display: flex;
    flex-direction: row;
    align-items: center;

    :nth-of-type(3) {
      align-items: flex-start;

      span {
        margin-top: 15px;
      }
    }
    :nth-of-type(6) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    :nth-of-type(7) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    :nth-of-type(8) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  p {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 166px;
    font-size: 12px;
    color: #eb455f;
  }
`;

export const divideLine = styled.div`
  background-color: rgb(200, 200, 200);
  width: 100%;
  height: 1px;
  margin: 40px 0;
`;

export const title = styled.h1`
  font-size: 30px;
  font-family: Nanum-ExtraBold;
  color: #191919;
  margin-top: 40px;

  ::after {
    content: "";
    display: block;
    background-color: #191919;
    width: 100%;
    height: 3px;
    margin: 30px 0 40px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Input_title = styled.span`
  width: 200px;
  color: #191919;
  font-family: Nanum-Bold;
`;

export const LengthBox = styled.span`
  width: 50px;
  color: rgb(180, 180, 180);
  margin-left: 20px;
`;

export const AddressBox = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;

  li {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;

      button {
        width: 150px;
        padding: 15px 0;
        margin-right: 30px;
        background-color: #f16767;
        color: #eee;
        cursor: pointer;
        margin-bottom: 40px;
      }
    }

    :first-of-type {
      margin-right: 20px;
    }
    :nth-of-type(2) {
      margin-left: 20px;
    }
  }
`;

export const Map_Box = styled.div`
  width: 500px;
  height: 400px;
`;

export const Input_Box = styled.div`
  margin-bottom: 20px;
`;

export const Img_Box = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    width: 150px;
    height: 150px;
    background-color: gray;
    margin-top: 40px;
    margin-right: 20px;
  }
`;

export const Radio_Box = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      margin-right: 5px;
    }
    input[type="radio"] {
      accent-color: #f16767;
    }
    input:last-of-type {
    }

    label {
      font-size: 12px;
      font-family: Nanum-Bold;
    }
  }
`;

export const ProductButton_Box = styled.div`
  position: fixed;

  display: flex;
  flex-direction: row;
  right: 40px;
  bottom: 40px;
`;

// export const ErrorMessage = styled.span`
//   color: rgb(255, 80, 88);
//   margin-left: 5px;
//   font-size: 12px;
// `;
