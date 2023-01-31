import { gql } from "@apollo/client";

export const BOARDLIST_QUERY = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;
