import CommentList from "../../../../../src/components/units/board/comment/list/CommentList.container";
import CommentWrite from "../../../../../src/components/units/board/comment/write/CommentWrite.container";

export default function FreeboardPostMovedComment() {
  return (
    <>
      <CommentWrite />
      <CommentList />
    </>
  );
}