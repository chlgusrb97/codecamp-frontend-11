export default function Hof() {
  const onClickButton = (num: any) => () => {
    console.log(num);
  };

  return (
    <>
      <button onClick={onClickButton(123)}>버튼</button>
    </>
  );
}
