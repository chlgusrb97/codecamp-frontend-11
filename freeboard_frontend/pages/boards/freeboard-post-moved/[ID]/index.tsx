import BoardFetch from "../../../../src/components/units/board/detail/FetchBoard-container";
import FreeboardPostMovedComment from "../freeboard-post-moved-comment";

export default function FreeboardPostMoved() {
  return (
    <div>
      <BoardFetch />
      <FreeboardPostMovedComment />
    </div>
  );
}
