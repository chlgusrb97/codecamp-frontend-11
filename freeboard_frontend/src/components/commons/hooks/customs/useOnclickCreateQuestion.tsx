import { useRouter } from "next/router"
import { UseFormSetValue } from "react-hook-form"
import { ICreateUseditemQuestionInput } from "../../../../commons/types/generated/types"
import useMutationCreateQuestion from "../mutations/useMutationCreateQuestion"
import { FETCH_USED_ITEM_QUESTIONS } from "../queries/useQueryFetchitemQuestions"

export default function useOnclickCreateQuestion() {
  const router = useRouter()

  const [createUseditemQuestion] = useMutationCreateQuestion()

  const onClickCreateQuestion = (setValue: UseFormSetValue<ICreateUseditemQuestionInput>) =>  async (data: ICreateUseditemQuestionInput) => {
    const result = await createUseditemQuestion({
      variables: {
        useditemId: String(router.query.productsId),
        createUseditemQuestionInput: {
          contents: data.contents
        }
      },
      refetchQueries: [{
        query: FETCH_USED_ITEM_QUESTIONS,
        variables: {
          useditemId: String(router.query.productsId),
        }
      }]
    })
    setValue("contents", "")
  }

  return { onClickCreateQuestion }
}