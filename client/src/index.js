import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo-hooks'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

import App from './components/App'
import Loading from './components/Loading'

import useAuthState from './utilities/useAuthState'
import createApolloClient from './utilities/createApolloClient'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.016em;
    line-height: 20px;
    color: #4c4c4c;
  }
`

const Root = () => {
  const { loading, getIdToken } = useAuthState()

  return loading ? (
    <>
      <Normalize />
      <GlobalStyle />
      <Loading />
    </>
  ) : (

    <ApolloProvider client={createApolloClient(getIdToken)}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
