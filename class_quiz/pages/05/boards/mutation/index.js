import { useState } from 'react'
import { useMutation,gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`


export default function GraphqlMutation() {

  const router = useRouter()
  
  const [ createProduct ] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickCreateProdct = async () => {

    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price)
          }
        }
      })
      console.log(result);
      console.log(result.data.createProduct._id)
      router.push(`/05/boards/routing-moved/${result.data.createProduct._id}`)
    } catch(error) {
      alert(error.message)
    }
    
  }

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeDetail = (event) => {
    setDetail(event.target.value)
  }

  const onChangePrice = (event) => {
    setPrice(event.target.value)
  }

  return (
    <div>
      <input type="text" placeholder='판매자' onChange={onChangeSeller} />
      <input type="text" placeholder='상품명' onChange={onChangeName} />
      <input type="text" placeholder='상품내용' onChange={onChangeDetail} />
      <input type="text" placeholder='상품가격' onChange={onChangePrice} />
      <button onClick={onClickCreateProdct}>상품등록</button>
    </div>
  )

}