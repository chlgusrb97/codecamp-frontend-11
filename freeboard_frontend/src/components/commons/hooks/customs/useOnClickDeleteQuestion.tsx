import { useRouter } from "next/router"
import useMutationDeleteQuestion from "../mutations/useMutationDeleteQuestion"
import { FETCH_USED_ITEM_QUESTIONS } from "../queries/useQueryFetchitemQuestions"

export default function useOnClickDeleteQuestion() {
  const router = useRouter()

  const [deleteUseditemQuestion] = useMutationDeleteQuestion()

  const onClickDeleteQuestion = (id: string) => () => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: id
      },
      refetchQueries: [{
        query: FETCH_USED_ITEM_QUESTIONS,
        variables: {
          useditemId: String(router.query.productsId),
        }
      }]
    })
  }
  
  return {onClickDeleteQuestion}
}