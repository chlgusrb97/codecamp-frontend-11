import { } from './FetchProducts.styles'
import { Fragment } from 'react'

export default function FetchWriteUI(props) {

  return (
    <Fragment>
      {props.data?.fetchProducts.map((el, index) => (
      <div key={el._id}>
        <input type="checkbox" />
        <span>{el.seller}</span>
        <span>{el.name}</span>
        <span>{el.detail}</span>
        <span>{el.price}</span>
        <button id={el._id} onClick={props.onClickDelete}>삭제</button>
      </div>
      ))}
    </Fragment>
  )

}