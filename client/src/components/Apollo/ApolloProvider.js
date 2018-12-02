import React from 'react'
import { ApolloProvider as Provider } from 'react-apollo'
import get from 'lodash.get'

import ApolloContext from './context'

import Firebase from '../Firebase'
import createApolloClient from '../../utilities/create-apollo-client'

const ApolloProvider = ({ children }) => (
  <Firebase>
    {({ auth }) => {
      const client = createApolloClient(get(auth, 'token'))

      const value = {
        client,
      }

      return (
        <Provider client={client}>
          <ApolloContext.Provider value={value}>
            {children}
          </ApolloContext.Provider>
        </Provider>
      )
    }}
  </Firebase>
)

export default ApolloProvider
