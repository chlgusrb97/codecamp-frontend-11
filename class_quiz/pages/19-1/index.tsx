import { useEffect, useRef } from "react";

export default function UseRefFoucus() {
  const focusRef = useRef(null);
  console.log(focusRef);

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <>
      <input type="password" ref={focusRef} />
    </>
  );
}
