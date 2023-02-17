import * as S from "./signInButton.styles";

export interface ISignInButtonProps {
  title: string;
  isActive: boolean;
}

export default function SignInButton(props: ISignInButtonProps) {
  return (
    <S.SubmitButton isActive={props.isActive}>{props.title}</S.SubmitButton>
  );
}
