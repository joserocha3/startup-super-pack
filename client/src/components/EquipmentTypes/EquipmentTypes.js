import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import EquipmentTypeCreateForm from './EquipmentTypeCreateForm'
import EquipmentTypeList from './EquipmentTypeList'

import queries from '../../queries'

const EquipmentType = () => {
  const { loading, error, data } = useQuery(queries.equipmentTypes.ALL_FIELDS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
  <>
    <h1>Equipment Types</h1>
    <EquipmentTypeCreateForm />
    <EquipmentTypeList equipmentTypes={data.equipmentTypes} />
  </>
  )
}

export default EquipmentType
