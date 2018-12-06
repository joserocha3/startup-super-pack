import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import styled from 'styled-components'

import { Field } from '../Form'

const Wrapper = styled.div`

`

const USER_QUERY = gql`
  query UserQuery {
    users {
      id
      email
    }
  }
`

const UserSelect = ({ name = 'user', placeholder = 'Select a user', ...others }) => (
  <Wrapper>
    <Query query={USER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <Field component="select" name={name} {...others}>
            <option value="" disabled>{placeholder}</option>
            {data.users.map(user => <option key={user.id} value={user.id}>{user.email}</option>)}
          </Field>
        )
      }}
    </Query>
  </Wrapper>
)

export default UserSelect
