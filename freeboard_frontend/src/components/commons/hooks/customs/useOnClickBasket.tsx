import { useRecoilState } from "recoil";
import { restoreBasketCount } from "../../../../commons/stores";
import { IUseditem } from "../../../../commons/types/generated/types";

export default function useOnClickBasket() {
  const [_, setRecoilBaskets] = useRecoilState<number>(restoreBasketCount)

  const onClickBasket = (basket?: IUseditem) => () => {
    const baskets = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );

    const temp = baskets.filter((el: IUseditem) => el._id === basket?._id);
    if (temp.length >= 1) {
      alert("이미 담으신 물품입니다!!");
      return;
    }

    baskets.push(basket);

    localStorage.setItem("baskets", JSON.stringify(baskets));
    setRecoilBaskets(JSON.parse(localStorage.baskets ).length)
    
  };

  return {onClickBasket}
}