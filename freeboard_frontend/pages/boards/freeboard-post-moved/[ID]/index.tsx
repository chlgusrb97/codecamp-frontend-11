import BoardFetch from "../../../../src/components/units/board/detail/FetchBoard-container";
import BoardFetchComment from "../../../../src/components/units/board/comment/FechboardComment-container";

export default function FreeboardPostMoved() {
  return (
    <div>
      <BoardFetch />
      <BoardFetchComment />
    </div>
  );
}
