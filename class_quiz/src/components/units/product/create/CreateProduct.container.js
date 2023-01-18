import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import {CREATE_PRODUCT, UPDATE_PRODUCT } from './CreateProduct.queries'
import CreateProductUI from './CreateProduct.presenter';

export default function ProductWrite(props) {

  const [isActive, setIsActive] = useState(false);
  
  const router = useRouter()
  
  const [ createProduct ] = useMutation(CREATE_PRODUCT);
  const [ updateProduct ] = useMutation(UPDATE_PRODUCT);

  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const onClickCreateProduct = async () => {

    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price)
          }
        }
      })
      // console.log(result);
      // console.log(result.data.createProduct._id)
      router.push(`/09/products/new-moved/${result.data.createProduct._id}`)
    } catch(error) {
      alert(error.message)
    }
    console.log()
  }

  const onClickUpdateProduct = async () => {

    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.ID,
          updateProductInput: {
            name,
            detail,
            price: Number(price)
          }
        }
      })
      console.log(result);
      // console.log(result.data.updateProduct._id)
      router.push(`/09/products/new-moved/${result.data.updateProduct._id}`)
    } catch(error) {
      alert(error.message)
    }
    
  }

  const onChangeSeller = (event) => {
    setSeller(event.target.value)

    if(event.target.value && name && detail && price) {
      setIsActive(true)
    }
  }

  const onChangeName = (event) => {
    setName(event.target.value)

    if(seller && event.target.value && detail && price) {
      setIsActive(true)
    }
  }

  const onChangeDetail = (event) => {
    setDetail(event.target.value)

    if(seller && name && event.target.value && price) {
      setIsActive(true)
    }
  }

  const onChangePrice = (event) => {
    setPrice(event.target.value)

    if(seller && name && detail && event.target.value) {
      setIsActive(true)
    }
  }

  return (
    <div>
      <CreateProductUI
        seller = {onChangeSeller}
        name = {onChangeName}
        detail = {onChangeDetail}
        price = {onChangePrice}
        createProduct = {onClickCreateProduct}
        updateProduct = {onClickUpdateProduct}
        isActive = {isActive}
        isEdit = {props.isEdit}
      />
    </div>
  )
}