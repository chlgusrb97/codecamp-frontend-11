import { gql } from '@apollo/client'

export const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`