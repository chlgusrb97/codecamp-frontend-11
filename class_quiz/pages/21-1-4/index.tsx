import { useState } from "react";

export default function StatePrevPage() {
  const [state, setState] = useState(0);

  const onClickCount = () => {
    setState((qwer) => qwer + 1);
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={onClickCount}>버튼</button>
    </>
  );
}
