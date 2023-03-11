import * as S from "./aside.styles";
import { ILayoutAsideUIProps } from "./aside.types";

export default function LayoutAsideUI(props: ILayoutAsideUIProps) {
  // console.log(props.arr)
  // console.log(props.arr && props.arr[0].images[0])

  return (
    <>
      {/* <img src={`https://storage.googleapis.com/${props.arr[0].images[0]}`} /> */}
      <S.Wrapper>
        <li>최근 본 상품</li>
        <li>
          {props.arr?.map((el) => {
            // console.log(el.images, "이미지!!"),
            <div>
              <img src={`https://storage.googleapis.com/${el.images[0]}`} />
            </div>;
          })}
        </li>
      </S.Wrapper>
    </>
  );
}
