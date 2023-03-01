import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";

export default function MemoizationParentPage() {
  const [countState, setCountState] = useState(0);

  let count = 0;

  const onClickCount = useCallback(() => {
    count += 1;
    console.log(count);
  }, []);

  // const onClickCountState = useMemo(() => {
  //   return (): void => {
  //     console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   };
  // }, []);

  console.log("@@@@부모 컴포넌트 렌더링@@@@");

  return (
    <>
      <div>====================================</div>
      <h1>부모 컴포넌트</h1>
      <div>{count}</div>
      <button onClick={onClickCount}>버튼</button>
      <div>====================================</div>
      <div>{countState}</div>
      <button
        onClick={useMemo(() => {
          return (): void => {
            setCountState((prev) => prev + 1);
          };
        }, [])}
      >
        버튼
      </button>
      <div>====================================</div>
      <MemoizationChildPage />
    </>
  );
}
