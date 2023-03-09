import * as S from "./joinButton.styles";

export interface ISignInButtonProps {
  title: string;
  isActive: boolean;
}

export default function JoinButton(props: ISignInButtonProps) {
  return (
    <S.SubmitButton isActive={props.isActive}>{props.title}</S.SubmitButton>
  );
}
