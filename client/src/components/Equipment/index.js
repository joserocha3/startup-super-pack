import React from 'react'
import { Query } from 'react-apollo'

import EquipmentCreateForm from './EquipmentCreateForm'
import EquipmentList from './EquipmentList'

import queries from '../../queries'

const Equipment = () => (
  <>
    <h1>Equipment</h1>
    <EquipmentCreateForm />
    <Query query={queries.equipments.ALL_FIELDS}>
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
