import { gql } from 'apollo-boost'

export const ALL_FIELDS = gql`
  {
    listings {
      id
      title
      description
    }
  }
`

const listings = {
  ALL_FIELDS,
}

export default listings
