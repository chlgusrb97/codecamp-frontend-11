import { useQueryFetchUseditemQuestionAnswers } from "../queries/useQueryFetchUseditemQuestionAnswers";

export default function useOnLoadMoreFetchUseditemQuestionsAnswer() {
  const { data, fetchMore } = useQueryFetchUseditemQuestionAnswers();

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page:
          Math.ceil((data?.fetchUseditemQuestionAnswers.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestionAnswers === undefined) {
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return { onLoadMore };
}
