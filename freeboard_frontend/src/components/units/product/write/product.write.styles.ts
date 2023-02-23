import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1024px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Form = styled.form``;

export const ErrorMessage = styled.span`
  color: rgb(255, 80, 88);
  margin-left: 5px;
  font-size: 12px;
`;
