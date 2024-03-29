import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`

export default function GraphqlRouting() {
  
  const router = useRouter()
  console.log(router)

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.number }
  })

  console.log(data)

  return (
    <div>
      <div>판매자: {data?.fetchProduct?.seller}</div>
      <div>상품명: {data?.fetchProduct?.name}</div>
      <div>상품내용: {data?.fetchProduct?.detail}</div>
      <div>상품가격: {data?.fetchProduct?.price}</div>
    </div>
  )

}