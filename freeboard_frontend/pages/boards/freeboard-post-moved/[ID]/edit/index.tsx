import BoardWrite from "../../../../../src/components/units/board/write/CreateBoard-container";

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function FreeboardEdit() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.ID,
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
