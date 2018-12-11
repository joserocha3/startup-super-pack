import { gql } from 'apollo-boost'

const CREATE = gql`
  mutation createListing(
    $title: String!
    $description: String!
    $active: Boolean!
  ) {
    createListing(
      data: {
        title: $title
        description: $description   
      }
    ) {
      id
      title
      description
    }
  }
`

const equipments = {
  CREATE,
}

export default equipments
