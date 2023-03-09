import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
}

const Input = styled.input`
  width: 100%;
  padding: 25px 37px;
  border-radius: 5px;
  background-color: #f6f6f6;
  border: 1px solid #ccc;
  color: #000;
  outline: none;

  ::placeholder {
    color: #a9a9a9;
    font-family: NotoSans-Regular;
  }
`;

export default function JoinInput(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
