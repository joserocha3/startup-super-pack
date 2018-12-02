import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const USER_QUERY = gql`
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

const Admin = () => (
  <>
    <h1>Admin</h1>
    <p>The Admin Page is accessible by every signed in ADMIN user.</p>
    <h2>Users</h2>
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

const UserItem = ({ user }) => (
  <li>
    <span>
      <strong>ID:</strong>
      {user.id}
    </span>
    <span>
      <strong>E-Mail:</strong>
      {user.email}
    </span>
    <span>
      <strong>Username:</strong>
      {user.firstName}
    </span>
    <span>
      <strong>Role:</strong>
      {user.role}
    </span>
  </li>
)

const UserList = ({ users }) => (
  <ul>
    {users.map(user => <UserItem key={user.id} user={user} />)}
  </ul>
)

export default Admin
