import React, { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  //    === 1단계 방식===
  //    const onChangeStar = (value: number): void => {
  //      setValue(value);
  //    };

  //    === 2단계 방식===
  // const onChangeStar = (value) => setValue(value);

  return (
    <span>
      {/* <Rate onChange={onChangeStar} value={value} /> 1단계 방식 */}
      {/* <Rate onChange={onChangeStar} value={value} /> 2단계 방식 */}
      {/* <Rate onChange={(value) => setValue(value)} value={value} /> 3단계 방식 */}
      <Rate onChange={setValue} value={value} />
      {/* 4단계 방식   함수의 변수이름과 setValue에 전달할 인자 값이 동일할 경우 둘다 생략 가능    */}
    </span>
  );
}
