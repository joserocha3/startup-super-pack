import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const ME_QUERY = gql`
  query MeQuery {
    me {
      role
      firstName
    }
  }
`

const Home = () => (
  <>
    <h1>Home</h1>
    <Query query={ME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        return (
          <>
            <p>{`Hi ${data.me.firstName}, welcome to the Startup Super Pack web application client.`}</p>
            <p>{`You are currently logged in as ${data.me.role}.`}</p>
          </>
        )
      }}
    </Query>
  </>
)

export default Home
