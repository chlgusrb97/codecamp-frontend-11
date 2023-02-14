import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../src/commons/types/generated/types";
import { widthAuth } from "../../../../src/components/commons/example/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function Main() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  console.log(data);
  return <>{data?.fetchUserLoggedIn.name}님</>;
}

export default widthAuth(Main);
