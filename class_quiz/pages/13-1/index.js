import { Rate } from "antd";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(3);

  console.log(value);

  const onClick = (value) => {
    alert(value);
    setValue(value);
  };

  return (
    <span>
      <Rate onChange={onClick} value={value} />
      <div>{value}</div>
    </span>
  );
}
