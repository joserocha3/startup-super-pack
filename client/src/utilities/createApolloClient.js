import { InMemoryCache, ApolloClient, ApolloLink } from 'apollo-client-preset'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'

const createApolloClient = (getIdToken) => {
  const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI })

  const authLink = setContext(async (operation, { headers }) => {
    const token = await getIdToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (!process.env.REACT_APP_LOG_SERVER_ERRORS) return
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ))
    }
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  })

  return client
}

export default createApolloClient
