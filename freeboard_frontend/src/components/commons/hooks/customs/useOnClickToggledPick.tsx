import { useRouter } from "next/router"
import useToggleUseditemPick from "../mutations/useMutationToggleUseditemPick"

export default function useOnClickToggledPick() {
  const router = useRouter()

  const [toggleUseditemPick] = useToggleUseditemPick()

  const onClickToggledPick = async () => {
    const result = await toggleUseditemPick({
      variables: {
        useditemId: String(router.query.productsId)
      }
    })
    console.log(result)
  }

  return {onClickToggledPick}
}