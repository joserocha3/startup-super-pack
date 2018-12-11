import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { Field } from '../Form'

import queries from '../../queries'

const UserSelect = ({ name = 'type', placeholder = 'Select an equipment type', ...others }) => {
  const { loading, error, data } = useQuery(queries.equipmentTypes.TITLE)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Field component="select" name={name} {...others}>
      <option value="" disabled>{placeholder}</option>
      {data.equipmentTypes.map(type => <option key={type.id} value={type.id}>{type.title}</option>)}
    </Field>
  )
}

export default UserSelect
