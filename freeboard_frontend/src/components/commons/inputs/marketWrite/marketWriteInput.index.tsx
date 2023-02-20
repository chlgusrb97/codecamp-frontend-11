import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
}

const Input = styled.input`
  width: 100%;
  padding: 20px 15px;
  border-radius: 15px;
  background-color: #191919;
  border: 1px solid #eee;
  color: #eee;
  outline: none;

  ::placeholder {
    color: #928f8f;
  }
`;

export default function MarketWriteInput(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
}
