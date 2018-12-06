import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import EquipmentCreateForm from './EquipmentCreateForm'
import EquipmentList from './EquipmentList'

export const EQUIPMENTS_QUERY = gql`
  query EquipmentsQuery {
    equipments {
      id
      title
      description
      status
    }
  }
`

const Equipment = () => (
  <>
    <h1>Equipment</h1>
    <EquipmentCreateForm />
    <Query query={EQUIPMENTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <EquipmentList equipments={data.equipments} />
        )
      }}
    </Query>
  </>
)

export default Equipment
