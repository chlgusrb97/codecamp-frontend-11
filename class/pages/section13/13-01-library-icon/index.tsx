import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 42px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);
  };
  return <MyIcon id="삭제할게시글ID" onClick={onClickDelete} />;
}
