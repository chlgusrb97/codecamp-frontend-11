import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_PRODUCT} from './CreateProduct.queries'
import CreateProductUI from './CreateProduct.presenter';

export default function CreateProductJS() {
  
  const router = useRouter()
  
  const [ createProduct ] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickCreateProduct = async () => {

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
      <CreateProductUI
        seller = {onChangeSeller}
        name = {onChangeName}
        detail = {onChangeDetail}
        price = {onChangePrice}
        createProduct = {onClickCreateProduct}
      />
    </div>
  )
}