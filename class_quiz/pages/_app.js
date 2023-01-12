// import '../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

export default function App({ Component }) {

  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() 
  })

  return  (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
}