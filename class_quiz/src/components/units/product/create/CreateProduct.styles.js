import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${(props) => props.isActive ? "red" : ""};
`