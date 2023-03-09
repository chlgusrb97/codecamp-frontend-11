import { useRouter } from "next/router"
import { FETCH_USER_LOGGED_IN } from "../../layout/header/header.queries"
import useMutationCreatePointBuying from "../mutations/useMutationCreatePointTransactionOfBuyingAndSelling"

export default function useOnclickBuying() {
  const router = useRouter()

  const [createPointBuying] = useMutationCreatePointBuying()

  const onClickBuying = async () => {
    try {
      await createPointBuying({
        variables: {
          useritemId: String(router.query.productsId)
        },
        refetchQueries: [{
          query: FETCH_USER_LOGGED_IN,
        }]
      })
      alert("상품이 구매되었습니다.")
    } catch (error) {
      if(error instanceof Error) alert(error.message)
    }
  }

  return {onClickBuying}
}