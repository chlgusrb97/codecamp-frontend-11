import { Button } from './CreateProduct.styles'

export default function CreateProductUI(props) {

  return (
    <div>
      <input type="text" placeholder='판매자' onChange={props.seller} />
      <input type="text" placeholder='상품명' onChange={props.name} />
      <input type="text" placeholder='상품내용' onChange={props.detail} />
      <input type="text" placeholder='상품가격' onChange={props.price} />
      <Button
        onClick={props.createProduct}
        isActive={props.isActive}
      >
        상품등록
      </Button>
    </div>
  )

}