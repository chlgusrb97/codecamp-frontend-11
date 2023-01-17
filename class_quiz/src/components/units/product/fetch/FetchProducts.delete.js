import { gql } from '@apollo/client';

export const DELETE_PRODUCTS = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId) {
      _id
      number
      message
    }
  }
`