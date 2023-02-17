import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const Video = styled.video`
  position: fixed;
  width: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 450px;
  height: 550px;
  border-radius: 15px;
  color: #eee;
`;

export const Title = styled.span`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const Inputs_Box = styled.ul``;

export const Error_Message = styled.span`
  font-size: 12px;
  color: tomato;
`;
