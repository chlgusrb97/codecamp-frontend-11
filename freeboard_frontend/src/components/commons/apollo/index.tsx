import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloSetting {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
