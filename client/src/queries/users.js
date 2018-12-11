import { gql } from 'apollo-boost'

const ME = gql`
  {
    me {
      firstName
      role
    }
  }
`

const ALL_FIELDS = gql`
{
  users {
    id
    email
    firstName
    lastName
    role
  }
}
`

const users = {
  ME,
  ALL_FIELDS,
}

export default users
