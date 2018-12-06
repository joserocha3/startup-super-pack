import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import EquipmentTypeCreateForm from './EquipmentTypeCreateForm'
import EquipmentTypeList from './EquipmentTypeList'

export const EQUIPMENT_TYPE_QUERY = gql`
  query EquipmentTypeQuery {
    equipmentTypes {
      id
      title
      description
    }
  }
`

const EquipmentType = () => (
  <>
    <h1>Equipment Types</h1>
    <EquipmentTypeCreateForm />
    <Query query={EQUIPMENT_TYPE_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <EquipmentTypeList equipmentTypes={data.equipmentTypes} />
        )
      }}
    </Query>
  </>
)

export default EquipmentType
