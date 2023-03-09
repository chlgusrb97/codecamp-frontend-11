import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
      createdAt
    }
  }
`;

export const useQueryFetchitemQuestions = () => {
  const router = useRouter()

  const result = useQuery<Pick<IQuery, "fetchUseditemQuestions">, IQueryFetchUseditemQuestionsArgs>(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.productsId),
      page: 1
    }
  })

  return result
}