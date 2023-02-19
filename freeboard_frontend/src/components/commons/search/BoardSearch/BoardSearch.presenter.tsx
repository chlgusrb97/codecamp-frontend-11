import * as S from "./BoardSearch.styles";
import { IBoardSearchUI } from "./BoardSearch.types";

export default function BoardSearchUI(props: IBoardSearchUI) {
  return (
    <>
      <S.Wrapper>
        <S.SearchIcon />
        <S.SearchInput
          placeholder="검색어를 입력해 주세요."
          onChange={props.onChangeSearchEvent}
        />
      </S.Wrapper>
    </>
  );
}
