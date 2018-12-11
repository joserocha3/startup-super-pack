import { gql } from 'apollo-boost'

const ME = gql`
  {
    me {
      firstName
      role
    }
  }
`

const EMAIL = gql`
  {
    users {
      id
      email
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
  EMAIL,
  ALL_FIELDS,
}

export default users
