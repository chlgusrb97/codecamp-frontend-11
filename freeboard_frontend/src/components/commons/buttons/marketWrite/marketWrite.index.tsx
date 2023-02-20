import * as S from "./marketWrite.styles";

interface IMarketWriteButtonProps {
  title: string;
}

export default function MarketWriteButton(props: IMarketWriteButtonProps) {
  return <S.Button>{props.title}</S.Button>;
}
