import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRountingMovedPage(): JSX.Element {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  console.log(data);

  // 1. 새로운 컴포넌트 등장 시에도 글로벌 스테이트 값이 유지되는지??
  const onClickIsOpen = (): void => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동 시에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼을 클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {isOpen && <FetchPolicyExample />}
      ===========================================
      <button onClick={onClickMove}>
        2. 버튼을 클릭하면 페이지가 이동됩니다!!
      </button>
    </div>
  );
}
