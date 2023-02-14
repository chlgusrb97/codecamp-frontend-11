import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { createUploadLink } from "apollo-upload-client";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",

    // uri: "http://34.64.114.80/graphql",
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 = > 나중에 더 자세히 알아보기
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 = > 나중에 더 자세히 알아보기
  }); // Graphql 셋팅

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
      // Graphql 셋팅 불러오기 (<ApolloProvider client={client}>)
  )
}