import { gql } from '@apollo/client';
import exp from 'constants';

export const CREATE_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID! 
  ) {
    createBoardComment (
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      createdAt
    }
  }
`

export const FETCH_COMMENT = gql`
  query fetchBoardComments(
    $boardId: ID!
  ){
    fetchBoardComments (
      boardId: $boardId
    ){
      _id
      writer
      contents
      createdAt
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!) {
    deleteBoardComment(boardCommentId: $boardCommentId) 
  }
`