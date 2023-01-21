import { gql } from '@apollo/client'

export const BOARDLISTQUERY = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`