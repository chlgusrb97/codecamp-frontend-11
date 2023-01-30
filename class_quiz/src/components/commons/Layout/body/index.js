import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  /* height: 300px; */
  background-color: white;
`;

export default function BODY(props) {
  return <Wrapper>{props.children}</Wrapper>;
}
