import { useEffect, useRef } from "react";

export default function UseRefFoucus() {
  const focusRef = useRef(null);
  console.log(focusRef);

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <>
      <input
        style={{ margin: "30px 30px", paddingLeft: "10px" }}
        type="password"
        ref={focusRef}
      />
    </>
  );
}
