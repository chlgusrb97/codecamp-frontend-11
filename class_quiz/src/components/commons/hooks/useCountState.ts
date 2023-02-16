import { useState } from "react";

interface IUseCountState {
  count: number;
  onClickCountUp: () => void;
}

export const useCountState = (): IUseCountState => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  return {
    count,
    onClickCountUp,
  };
};
