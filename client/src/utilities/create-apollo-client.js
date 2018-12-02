import { InMemoryCache, ApolloClient } from 'apollo-client-preset'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const createApolloClient = (token) => {
  const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI })

  const authLink = setContext((operation, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}

export default createApolloClient
