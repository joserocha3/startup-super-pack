import { gql } from 'apollo-boost'

const ALL_FIELDS = gql`
  {
    equipments {
      id
      title
      description
      status
    }
  }
`

const equipments = {
  ALL_FIELDS,
}

export default equipments
