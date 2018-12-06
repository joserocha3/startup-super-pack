import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import UserCreateForm from './UserCreateForm'
import UserList from './UserList'

export const USER_QUERY = gql`
  query UserQuery {
    users {
      id
      email
      firstName
      lastName
      role
    }
  }
`

const Users = () => (
  <>
    <h1>Users</h1>
    <UserCreateForm />
    <Query query={USER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <UserList users={data.users} />
        )
      }}
    </Query>
  </>
)

export default Users
