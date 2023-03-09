import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const SubmitButton = styled.button`
  width: 330px;
  height: 70px;
  line-height: 70px;
  cursor: pointer;
  background-color: ${(props: IProps) =>
    props.isActive ? "#ffe004" : "#000"};
  color: ${(props: IProps) =>
    props.isActive ? "#000" : "#fff"
  };
  font-size: 20px;
`;
