import { gql, useQuery } from "@apollo/client"
import { IQuery, IQueryFetchUseditemsIPickedArgs } from "../../../../commons/types/generated/types"

const FETCH_USED_ITEMS_PICKED = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
      pickedCount
    }
  }
`

export const useQueryFetchUseditemsIPicked = () => {
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsIPicked">, IQueryFetchUseditemsIPickedArgs>(FETCH_USED_ITEMS_PICKED)

  return { data }
}