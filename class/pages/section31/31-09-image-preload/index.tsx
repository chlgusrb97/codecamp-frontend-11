import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = [];

export default function ImagePreloadPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://images.wallpaperscraft.com/image/single/cat_eyes_blue_143433_3844x2400.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  const onClickMove = (): void => {
    void router.push("/section31/31-09-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
