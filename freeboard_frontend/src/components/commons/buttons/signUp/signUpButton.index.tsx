import * as S from "./signUpButton.styles";

export interface ISignInButtonProps {
  title: string;
  isActive: boolean;
  // onClick: () => Promise<void>;
}

export default function SignUpButton(props: ISignInButtonProps) {
  return (
    <S.SubmitButton isActive={props.isActive}>{props.title}</S.SubmitButton>
  );
}
