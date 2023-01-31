import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { BOARDLIST_QUERY } from "./Boardlist.queries";
import BoardListUI from "./Boardlist.presenter";
import { MouseEvent } from "react";

export default function BoardListWrite() {
  const router = useRouter();

  const { data } = useQuery(BOARDLIST_QUERY);

  const onClickMovedDetail = (event: MouseEvent<HTMLSpanElement>): void => {
    router.push(`/boards/freeboard-post-moved/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = (): void => {
    router.push(`/boards/freeboard-post `);
  };

  return (
    <BoardListUI
      data={data}
      onClickCreateBoard={onClickCreateBoard}
      onClickMovedDetail={onClickMovedDetail}
    />
  );
}
