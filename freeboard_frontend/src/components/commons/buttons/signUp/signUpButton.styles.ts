import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

export const SubmitButton = styled.button`
  width: 100%;
  height: 65px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${(props: IProps) =>
    props.isActive ? "#9f531d" : "#585454"};
  color: #eee;
  font-size: 20px;
`;
