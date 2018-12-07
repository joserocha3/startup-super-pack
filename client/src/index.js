import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

import App from './components/App'
import Apollo, { ApolloProvider } from './components/Apollo'
import { FirebaseProvider } from './components/Firebase'

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

ReactDOM.render(
  <FirebaseProvider>
    <ApolloProvider>
      <Apollo>
        {({ client }) => (
          <ApolloHooksProvider client={client}>
            <Normalize />
            <GlobalStyle />
            <App />
          </ApolloHooksProvider>
        )}
      </Apollo>
    </ApolloProvider>
  </FirebaseProvider>,
  document.getElementById('root'),
)
