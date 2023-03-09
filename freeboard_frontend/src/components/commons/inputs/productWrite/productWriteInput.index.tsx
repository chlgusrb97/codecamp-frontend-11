import styled from "@emotion/styled";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Maybe } from "yup";

interface IInputProps {
  type?: "text" | "password";
  register?: UseFormRegisterReturn;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string | Maybe<number> | Maybe<string[]>
}

const Input = styled.input`
  width: 100%;
  padding: 21px 19px;
  outline: none;
  color: #000;
  background-color: #e9e9e9;

  ::placeholder {
    color: #a9a9a9;
    font-family: Nanum-Regular;
    font-size: 15px;
  }
`;

export default function ProductsWriteInput(props: IInputProps): JSX.Element {
  return (
    <Input
      type={props.type ?? "text"}
      placeholder={props.placeholder ?? ""}
      disabled={props.disabled ?? false}
      defaultValue={props.defaultValue ?? ""}
      {...props.register}
    />
  );
}
