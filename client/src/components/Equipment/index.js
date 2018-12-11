import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import EquipmentCreateForm from './EquipmentCreateForm'
import EquipmentList from './EquipmentList'

import queries from '../../queries'

const Equipment = () => {
  const { loading, error, data } = useQuery(queries.equipments.ALL_FIELDS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return <>
    <h1>Equipment</h1>
    <EquipmentCreateForm />
    <EquipmentList equipments={data.equipments} />
  </>
}

export default Equipment
