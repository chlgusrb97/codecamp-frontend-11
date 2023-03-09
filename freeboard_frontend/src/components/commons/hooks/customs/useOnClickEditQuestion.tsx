import { useRouter } from "next/router"
import { useState } from "react"
import { IUpdateUseditemQuestionInput, IUseditemQuestion } from "../../../../commons/types/generated/types"
import useMutationUpdateQuestion from "../mutations/useMutationUpdateQuestion"
import { FETCH_USED_ITEM_QUESTIONS } from "../queries/useQueryFetchitemQuestions"

export default function useOnClickEditQuestion() {
  const router = useRouter()

  const [ updateUseditemQuestion ] = useMutationUpdateQuestion()
  const [isEdit, setIsEdit] = useState(false)

  const onClickEditQuestion = (el: IUseditemQuestion) => async (data: IUpdateUseditemQuestionInput) => {
    await updateUseditemQuestion({
      variables: {
        useditemQuestionId: el._id,
        updateUseditemQuestionInput: {
          contents: data.contents
        }
      },
      refetchQueries: [{
        query: FETCH_USED_ITEM_QUESTIONS,
        variables: { useditemId: String(router.query.productsId) }
      }]
    })
    setIsEdit(false)
  }

  return {onClickEditQuestion, isEdit, setIsEdit}
}