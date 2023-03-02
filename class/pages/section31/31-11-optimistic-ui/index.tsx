import { gql, useMutation, useQuery } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "63fdcd52aef9f000281b2f8f" },
    }
  );

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = (): void => {
    void likeBoard({
      variables: {
        boardId: "63fdcd52aef9f000281b2f8f",
      },
      // refetchQueries: [{}],
      // optimisticResponse: {
      //   likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      // },
      update: (cache, { data }) => {
        // data?.likeBoard // 좋아요 갯수(6)
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardID: "63fdcd52aef9f000281b2f8f" },
          data: {
            fetchBoard: {
              _id: "63fdcd52aef9f000281b2f8f",
              __typename: "Board",
              likeCount: data?.likeBoard, // 좋아요 갯수(6)
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
