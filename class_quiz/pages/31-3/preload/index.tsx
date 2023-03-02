import { MutableRefObject, useEffect, useRef, useState } from "react";

const myImages = [
  "/images/01.jpeg",
  "/images/02.jpeg",
  "/images/03.jpeg",
  "/images/04.jpeg",
  "/images/05.jpeg",
  "/images/06.jpeg",
  "/images/07.jpeg",
  "/images/08.jpeg",
  "/images/09.jpeg",
  "/images/10.jpeg",
];

const newImages = [];

export default function PreloadPage() {
  const ref = useRef(null) as MutableRefObject<HTMLDivElement>;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    myImages.map((_, index) => {
      const img = new Image();
      img.src = myImages[index];
      img.onload = () => {
        // newImages.push(myImages[index]);

        newImages.push(img);
      };
    });
  }, []);

  const onClickShowImages = () => {
    setHidden((prev) => !prev);
    if (ref.current) {
      console.log(newImages);
      newImages.forEach((el) => {
        ref.current.append(el);
        // ref?.current?.appendChild(el);
      });
    }
  };
  console.log(newImages);

  return (
    <div ref={ref}>
      <button onClick={onClickShowImages}>
        이미지 {hidden ? "숨기기" : "보여주기"}
      </button>
      {/* {hidden ? newImages.map((el) => <img src={el} />) : <></>} */}
      {/* {hidden ? newImages.map((el) => console.log(el.props, "안녕")) : <></>} */}
    </div>
  );
}
