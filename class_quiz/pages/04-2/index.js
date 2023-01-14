import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function GraphqlApi() {

  const [ createBoard ] = useMutation(CREATE_BOARD);
  
  const [seller, setSeller] = useState()
  const [name, setName] = useState()
  const [detail, setDetail] = useState()
  const [price, setPrice] = useState()

  const onClickBtn = async () => {
    const result = await createBoard({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price)
        }
      }
    })
    console.log(result)
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
      <input type="text" onChange={onChangeSeller} placeholder="Seller"/>
      <input type="text" onChange={onChangeName} placeholder="Name"/>
      <input type="text" onChange={onChangeDetail} placeholder="Detail"/>
      <input type="text" onChange={onChangePrice} placeholder="Price"/>
      <button onClick={onClickBtn}>GRAPHQL-API 요청하기</button>
      </div>
  )

}