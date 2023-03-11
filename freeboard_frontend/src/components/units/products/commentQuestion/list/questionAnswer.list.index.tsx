import { useQueryFetchUseditemQuestionAnswers } from "../../../../commons/hooks/queries/useQueryFetchUseditemQuestionAnswers";
import { IQuestionAnswerListUIProps } from "./questionAnswer.list.types";
import ProductsQuestionAnswerListItemUI from "./questionAnswer.listItem.index";
import { v4 as uuidv4 } from "uuid";
// import useOnLoadMoreFetchUseditemQuestionsAnswer from "../../../../commons/hooks/customs/useOnLoadMoreFetchUseditemQuestionsAnswer";
// import InfiniteScroll from "react-infinite-scroller";

export default function ProductsQuestionAnswerListUI(
  props: IQuestionAnswerListUIProps
) {
  const { data } = useQueryFetchUseditemQuestionAnswers(props.id);
  // const { onLoadMore } = useOnLoadMoreFetchUseditemQuestionsAnswer();

  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {data?.fetchUseditemQuestionAnswers.map((el) => (
          <ProductsQuestionAnswerListItemUI key={uuidv4()} el={el} />
        ))}
      </div>
    </>
  );
}
