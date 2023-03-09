import * as S from "./product.styles";

interface IProductButtonProps {
  title: string;
  type?: "submit" | "button";
  isActive: boolean;
}

export default function ProductsButton(props: IProductButtonProps) {
  return (
    <S.Button type={props.type ?? "submit"} isActive={props.isActive}>
      {props.title}
    </S.Button>
  );
}
