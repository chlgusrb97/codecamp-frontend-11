import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const UseMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    // localStorage.setItem("visitedPage", path); // 로컬스트리지도 가능!
    setVisitedPage(path); // 로그인페이지일때는 set 하지 않도록 조건 추가
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
