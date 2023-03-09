import { useEffect, useState } from "react";
import LayoutAsideUI from "./aside.presenter";

export default function LayoutAsideContainer() {
  const [arr, setArr] = useState()

  useEffect(() => {
    if(typeof window !== undefined && sessionStorage.recentlyViewProducts) {  
        setArr(JSON.parse(sessionStorage.recentlyViewProducts))
    }
  }, [])
  // console.log(arr, "qqq")

  return <LayoutAsideUI 
  arr={arr}
  />
}