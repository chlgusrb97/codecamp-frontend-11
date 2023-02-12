import BoardSearchUI from "./BoardSearch.presenter";
import _ from "lodash";
import { IBoardSearch } from "./BoardSearch.types";
import { ChangeEvent } from "react";

export default function BoardSearch(props: IBoardSearch) {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchCountData({ search: value });
    props.onChangeKeyWord(value);
  }, 500);

  const onChangeSearchEvent = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return <BoardSearchUI onChangeSearchEvent={onChangeSearchEvent} />;
}
