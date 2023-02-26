import * as S from "./product.styles";

interface IProductButtonProps {
  title: string;
  type?: "submit" | "button";
}

export default function ProductButton(props: IProductButtonProps) {
  return <S.Button type={props.type ?? "submit"}>{props.title}</S.Button>;
}
