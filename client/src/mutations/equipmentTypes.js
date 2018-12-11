import { gql } from 'apollo-boost'

const CREATE = gql`
  mutation createEquipmentType(
    $title: String!
    $description: String!
  ) {
    createEquipmentType(
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

const equipmentTypes = {
  CREATE,
}

export default equipmentTypes
