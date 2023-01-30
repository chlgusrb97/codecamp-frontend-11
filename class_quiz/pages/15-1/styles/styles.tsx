import styled from "@emotion/styled";

interface IStyles {
  isActive: boolean;
}

export const Span = styled.span`
  color: ${(props: IStyles) => (props.isActive ? "red" : "black")};
`;
