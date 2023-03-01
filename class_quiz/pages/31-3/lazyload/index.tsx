import LazyLoad from "react-lazyload";

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

export default function LazyloadPage() {
  return (
    <>
      {myImages.map((el, index) => (
        <LazyLoad height={500}>
          <div key={index}>
            <img src={el} />
          </div>
        </LazyLoad>
      ))}
    </>
  );
}
