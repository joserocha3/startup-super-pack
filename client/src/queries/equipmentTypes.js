import { gql } from 'apollo-boost'

const ALL_FIELDS = gql`
  {
    equipmentTypes {
      id
      title
      description
    }
  }
`

const TITLE = gql`
  {
    equipmentTypes {
      id
      title
    }
  }
`

const equipmentTypes = {
  ALL_FIELDS,
  TITLE,
}

export default equipmentTypes
