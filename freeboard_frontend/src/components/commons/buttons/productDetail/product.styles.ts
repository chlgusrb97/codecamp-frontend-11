import styled from "@emotion/styled";

interface IProps {
  width: string
  color: string
}

export const Button = styled.button`
  width: ${(props: IProps) => 
    props.width};
  height: 100px;
  line-height: 77px;
  background-color: ${(props: IProps) =>
    props.color};
  color: #fff;
  font-family: NotoSans-Bold;
  font-size: 30px;
  cursor: pointer;
`;
