import { gql, useMutation } from "@apollo/client"
import { IMutation, IMutationToggleUseditemPickArgs } from "../../../../commons/types/generated/types"

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`

export default function useToggleUseditemPick() {

  const [toggleUseditemPick] = useMutation<Pick<IMutation, "toggleUseditemPick">, IMutationToggleUseditemPickArgs>(TOGGLE_USED_ITEM_PICK)

  return [toggleUseditemPick]
}