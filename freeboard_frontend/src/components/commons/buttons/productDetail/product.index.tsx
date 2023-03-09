import * as S from "./product.styles";

interface IProductButtonProps {
  title: string;
  type?: "submit" | "button";
  width: string
  color: string
  onClick?: () => void
}

export default function ProductsDetailButton(props: IProductButtonProps) {
  return (
    <>
      <S.Button 
        type={props.type ?? "submit"} 
        width={props.width}
        color={props.color}
        onClick={props.onClick}
      >
        {props.title}
      </S.Button>
    </>
  )
}
