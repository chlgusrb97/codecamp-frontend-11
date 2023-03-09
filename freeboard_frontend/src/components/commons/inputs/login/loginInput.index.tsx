import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
}

const Input = styled.input`
  width: 100%;
  padding: 29px 41px;
  border-radius: 5px;
  background-color: #f6f6f6;
  border: 1px solid #eee;
  color: #000;
  outline: none;

  ::placeholder {
    color: #6b6b6b;
    font-size: 18px;
    font-family: NotoSans-Regular;
  }
`;

export default function LoginInput(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
