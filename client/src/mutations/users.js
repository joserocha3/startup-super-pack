import { gql } from 'apollo-boost'

const CREATE = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $role: UserRole!
  ) {
    createUser(
      data: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        role: $role
      }
    ) {
      id
      email
      firstName
      lastName
      role
    }
  }
`

const users = {
  CREATE,
}

export default users
