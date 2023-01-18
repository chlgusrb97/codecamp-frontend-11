import { useQuery, useMutation } from '@apollo/client'
import { FETCH_PRODUCTS } from './FetchProducts.queries'
import { DELETE_PRODUCTS } from './FetchProducts.delete'
import FetchWriteUI from './FetchProducts.presenter'


export default function ProductsListWrite() {

  const { data } = useQuery(FETCH_PRODUCTS)

  const [ deleteProducts ] = useMutation(DELETE_PRODUCTS)

  const onClickDelete = (event) => {
    deleteProducts({
      variables: { productId: event.target.id },
      refetchQueries:[{query: FETCH_PRODUCTS}]
    })
  }

  return (
    <FetchWriteUI 
      data={data}
      onClickDelete={onClickDelete}
    />
  )
}