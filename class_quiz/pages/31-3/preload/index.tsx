import { useEffect, useState } from "react";

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
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    myImages.map((_, index) => {
      const img = new Image();
      img.src = myImages[index];
      img.onload = () => {
        newImages.push(myImages[index]);
      };
    });
  }, []);

  const onClickShowImages = () => {
    setHidden((prev) => !prev);
  };

  return (
    <>
      <button onClick={onClickShowImages}>
        이미지 {hidden ? "숨기기" : "보여주기"}
      </button>
      {hidden ? newImages.map((el) => <img src={el} />) : <></>}
    </>
  );
}
