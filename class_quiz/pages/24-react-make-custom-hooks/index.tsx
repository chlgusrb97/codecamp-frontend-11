import { useCountState } from "../../src/components/commons/hooks/useCountState";

export default function QuizPage() {
  const { count, onClickCountUp } = useCountState();

  return (
    <>
      <div>
        <p>지금의 카운트는 {count} 입니다!</p>
        <button onClick={onClickCountUp}>Count up!</button>
      </div>
    </>
  );
}
