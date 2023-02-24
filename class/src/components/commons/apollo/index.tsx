import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadble,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadble);

  // 1. 프리렌더링 예제 - process.brower 방법

  // if (process.browser) {
  //   console.log("나는 지금 브라우저다!!!");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log(
  //     "지금은 프론트엔드 서버다!!!(즉, yarn dev로 실행시킨 프로그램 내부다!)"
  //   );
  // }

  // 2. 프리렌더링 예제 - typeof window 방법

  // if (typeof window === "undefined") {
  //   console.log("나는 지금 브라우저다!!!");
  // } else {
  //   console.log(
  //     "지금은 프론트엔드 서버다!!!(즉, yarn dev로 실행시킨 프로그램 내부다!)"
  //   );
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("accessToken");

    // 2. 새로운방식(refreshToken 이후)
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
    // void getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken ?? "");
    // });

    console.log("나는 지금 브라우저다!!!");
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크 (UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기

            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 정보 수정하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer asdfasdf => 만료된 토큰이 추가되어 있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 3-2. 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql",

    // uri: "http://34.64.114.80/graphql",
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
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
