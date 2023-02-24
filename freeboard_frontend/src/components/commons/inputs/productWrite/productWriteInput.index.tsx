import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
  length: number;
  disabled: boolean;
}

const Input = styled.input`
  width: 100%;
  border: 1px solid rgb(200, 200, 200);
  padding: 15px 10px;
  outline: none;
  color: #191919;
  background-color: #fff;

  ::placeholder {
    color: #928f8f;
    font-family: Nanum-Regular;
    font-size: 12px;
  }
`;

export default function ProductWriteInput(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      maxLength={props.length}
      disabled={props.disabled}
      {...props.register}
    />
  );
}
