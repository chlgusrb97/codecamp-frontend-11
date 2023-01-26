import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState();

  const onChange = (date, dateString) => {
    // setDate(dateString);
    setDate(date.$M + 1);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <div>{date}</div>
    </Space>
  );
}
