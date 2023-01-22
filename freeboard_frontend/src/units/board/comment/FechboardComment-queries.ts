import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
  query createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment (
      createBoardCommentInput: $CreateBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
    }
  }
`