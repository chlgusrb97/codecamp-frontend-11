import InfiniteScroll from "react-infinite-scroller";
import { IQuery } from "../../src/commons/types/generated/types";

interface IInfiniteScrollerUI {
  onLoadMore: () => void;
  data: Pick<IQuery, "fetchBoards">;
}

export default function InfiniteScrollerPresenter(props: IInfiniteScrollerUI) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true || false}
        style={{ height: "500px", overflow: "auto" }}
      >
        {props.data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span>{el.title}</span>
            <span>{el.writer}</span>
          </div>
        )) ?? <div></div>}
      </InfiniteScroll>
    </div>
  );
}
