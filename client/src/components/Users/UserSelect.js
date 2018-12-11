import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { Field } from '../Form'

import queries from '../../queries'

const UserSelect = ({ name = 'user', placeholder = 'Select a user', ...others }) => {
  const { loading, error, data } = useQuery(queries.users.EMAIL)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Field component="select" name={name} {...others}>
      <option value="" disabled>{placeholder}</option>
      {data.users.map(user => <option key={user.id} value={user.id}>{user.email}</option>)}
    </Field>
  )
}

export default UserSelect
