import { useRouter } from "next/router";
import { IUseditem } from "../../../../commons/types/generated/types";
import useOnClickRecentlyViewProducts from "./useOnClickRecentlyViewProducts";

export default function useOnclickMovedDetail() {
  const router = useRouter();
  const { onClickRecentlyViewProducts } = useOnClickRecentlyViewProducts();

  const onClickMovedDetail = (el: IUseditem) => (): void => {
    onClickRecentlyViewProducts(el);
    void router.push(`/main/products/products-post-moved/${el._id}`);
  };

  return { onClickMovedDetail };
}
