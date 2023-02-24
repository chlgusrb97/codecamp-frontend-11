import * as S from "./productWrite.styles";

interface IProductWriteButtonProps {
  title: string;
  type?: "submit" | "button";
}

export default function ProductWriteButton(props: IProductWriteButtonProps) {
  return <S.Button type={props.type ?? "submit"}>{props.title}</S.Button>;
}
