export default function NEWMOVEDUI(props) {
  return (
    <div>
      <div>판매자: {props.seller}</div>
      <div>상품명: {props.name}</div>
      <div>상품내용: {props.detail}</div>
      <div>상품가격: {props.price}</div>
    </div>
  )
}