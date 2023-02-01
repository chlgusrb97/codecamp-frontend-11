import { MouseEvent } from "react";
import { Span } from "./paginations-boardList.style";

interface IPanginationsBoardListUI {
  startPage: number;
  targetId: number;
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export default function PanginationsBoardListUI(
  props: IPanginationsBoardListUI
) {
  return (
    <>
      <button
        onClick={props.onClickPrevPage}
        disabled={props.startPage === 1 ? true : false}
      >
        이전페이지
      </button>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Span
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={index + props.startPage === props.targetId}
            >
              {index + props.startPage}
            </Span>
          )
      )}
      <button
        onClick={props.onClickNextPage}
        disabled={props.startPage + 10 <= props.lastPage ? false : true}
      >
        다음페이지
      </button>
    </>
  );
}
