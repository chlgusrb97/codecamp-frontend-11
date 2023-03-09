import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const Button = styled.button`
  width: 195px;
  height: 77px;
  line-height: 77px;
  background-color: ${(props: IProps) =>
    props.isActive ? "#ffe004" : "#000"};
  color: ${(props: IProps) =>
    props.isActive ? "#000" : "#fff"
  };
  font-family: NotoSans-Bold;
  font-size: 20px;
  cursor: pointer;
`;
