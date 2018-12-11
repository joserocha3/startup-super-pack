import { gql } from 'apollo-boost'

const CREATE = gql`
  mutation createEquipment(
    $title: String!
    $description: String!
    $status: EquipmentStatus!
    $type: ID!
    $owner: ID!
  ) {
    createEquipment(
      data: {
        title: $title
        description: $description
        status: $status
        type: $type
        owner: $owner
      }
    ) {
      id
      title
      description
      status
    }
  }
`

const equipments = {
  CREATE,
}

export default equipments
