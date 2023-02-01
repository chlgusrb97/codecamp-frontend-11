import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function IsChanged() {
  const router = useRouter();
  const [isChanged, setIsChanged] = useState(false);

  const onClickChange = (): void => {
    setIsChanged(true);
  };

  const onClickMoved = (): void => {
    router.push("/");
  };

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChanged]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMoved}>이동</button>
    </>
  );
}
