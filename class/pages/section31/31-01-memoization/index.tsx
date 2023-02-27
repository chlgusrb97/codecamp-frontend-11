import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 렌더링 되었습니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback으로 함수 기억
  const onClickCountLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1; //  countLet = countLet + 1
  }, []);

  // 3. useCallback 사용시 주의사항 => state 사용 주의
  const onClickCountState = useCallback((): void => {
    console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // // 4. useMemo로 나만의 useCallback 만들어보기
  // const onClickCountState2 = useMemo(() => {
  //   return ():void => {
  //     console.log(countState + 1)
  //     setCountState( countState + 1)
  //   }
  // }, [])

  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      {/* 로직과 UI가 합쳐져서 헷갈림 => 유지보수 힘듬, 메모이제이션 더 복잡함
      <div>카운트(state): {countState}</div>
      <button
        onClick={useCallback((): void => {
          // console.log(countState + 1)
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state) +1 올리기
      </button> */}
    </>
  );
}
