import Link from "next/link";
import { useRouter } from "next/router";

export default function Map2Page() {
  const router = useRouter();

  // const onClickMovedMap1 = () => {
  //   router.push("/26/map1");
  // };
  return (
    <>
      {/* <button onClick={onClickMovedMap1}>이동하기</button>; */}
      <Link href="/26/map1">
        <a>이동하기</a>
      </Link>
    </>
  );
}
