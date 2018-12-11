import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import UserCreateForm from './UserCreateForm'
import UserList from './UserList'

import queries from '../../queries'

const Users = () => {
  const { data, error, loading } = useQuery(queries.users.ALL_FIELDS)

  return (
    <>
      <h1>Users</h1>
      {loading && <>Loading...</>}
      {error && <>error.message</>}
      {!loading && !error && <UserCreateForm />}
      {!loading && !error && <UserList users={data.users} />}
    </>
  )
}

export default Users
