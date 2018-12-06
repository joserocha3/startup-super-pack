import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import styled from 'styled-components'

import { Field } from '../Form'

const Wrapper = styled.div`

`

const QUERY = gql`
  {
    equipmentTypes {
      id
      title
    }
  }
`

const UserSelect = ({ name = 'type', placeholder = 'Select an equipment type', ...others }) => (
  <Wrapper>
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <Field component="select" name={name} {...others}>
            <option value="" disabled>{placeholder}</option>
            {data.equipmentTypes.map(type => <option key={type.id} value={type.id}>{type.title}</option>)}
          </Field>
        )
      }}
    </Query>
  </Wrapper>
)

export default UserSelect
