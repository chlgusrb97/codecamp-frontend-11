import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import NEWMOVEDUI from './CrateProductMoved.presenter'

export default function ProductMovedWrite() {

  const router = useRouter()
  console.log(router)

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.ID }
  })

  console.log(data)

  return (
    <div>
      <NEWMOVEDUI 
        seller={data?.fetchProduct?.seller}
        name={data?.fetchProduct?.name}
        detail={data?.fetchProduct?.detail}
        price={data?.fetchProduct?.price}
      />
    </div>
  )
}