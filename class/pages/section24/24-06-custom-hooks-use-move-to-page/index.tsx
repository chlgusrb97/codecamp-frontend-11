import { UseMoveToPage } from "../../../src/components/commons/hooks/useMoveTopage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage } = UseMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypages")}>
        마이페이지으로 이동
      </button>
    </>
  );
}
