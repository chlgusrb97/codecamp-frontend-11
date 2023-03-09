import * as S from "./loginButton.styles";

export interface ISignInButtonProps {
  title: string;
  // onClick: () => Promise<void>;
}

export default function LoginButton(props: ISignInButtonProps) {
  return (
    <S.SubmitButton>{props.title}</S.SubmitButton>
  );
}
