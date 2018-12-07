import React from 'react'
import styled from 'styled-components'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import Navigation from '../Navigation'
import Routes from '../Routes'
import SignOut from '../SignOut'
import Firebase from '../Firebase'
import Apollo from '../Apollo'
import Loading from '../Loading'

const Wrapper = styled.div`
  margin: 20px;
`

const App = () => (
  <Firebase>
    {({ loading }) => (
      <Apollo>
        {({ client }) => (
          <ApolloHooksProvider client={client}>
            <Wrapper>
              <Navigation />
              <hr />
              <Routes />
              <SignOut />
              {loading && <Loading />}
            </Wrapper>
          </ApolloHooksProvider>
        )}
      </Apollo>
    )}
  </Firebase>
)

export default App
