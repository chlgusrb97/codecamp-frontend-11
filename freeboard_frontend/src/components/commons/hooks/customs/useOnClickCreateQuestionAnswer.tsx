import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { ICreateUseditemQuestionAnswerInput } from "../../../../commons/types/generated/types";
import useMutationCreateQuestionAnswer from "../mutations/useMutationCreateUseditemQuestionAnswer";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../queries/useQueryFetchUseditemQuestionAnswers";

export default function useOnClickCreateQuestionAnswer() {
  const [isOpen, setIsOpen] = useState(false);
  const [createQuestionAnswer] = useMutationCreateQuestionAnswer();

  const onClickCreateQuestionAnswer =
    (setValue: UseFormSetValue<ICreateUseditemQuestionAnswerInput>) =>
    (id: string) =>
    async (data: ICreateUseditemQuestionAnswerInput) => {
      await createQuestionAnswer({
        variables: {
          useditemQuestionId: id,
          createUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: id,
            },
          },
        ],
      });
      setIsOpen(true);
      setValue("contents", "");
    };

  return { onClickCreateQuestionAnswer, isOpen };
}
