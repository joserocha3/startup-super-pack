import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'

const ME_QUERY = gql`
  query MeQuery {
    me {
      role
      firstName
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(ME_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
  <>
    <h1>Home</h1>
    <p>{`Hi ${data.me.firstName}, welcome to the Startup Super Pack web application client.`}</p>
    <p>{`You are currently logged in as ${data.me.role}.`}</p>
  </>
  )
}

export default Home
