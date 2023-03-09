import { IUseditem } from "../../../../commons/types/generated/types";


export default function useOnClickRecentlyViewProducts() {

  const onClickRecentlyViewProducts = (el?: IUseditem) => {
    
    const recentlyViewProducts = JSON.parse(
      sessionStorage.getItem("recentlyViewProducts") ?? "[]"
    );

    recentlyViewProducts.push(el)

    sessionStorage.setItem("recentlyViewProducts", JSON.stringify(recentlyViewProducts));
    
  };

  return {onClickRecentlyViewProducts}
}