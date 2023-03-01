import { memo } from "react";

function MemoizationChildPage() {
  console.log("@@@@@자식 컴포넌트 렌더링@@@@");

  return (
    <>
      <div>====================================</div>
      <h1>자식 컴포넌트</h1>
      <div>====================================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
