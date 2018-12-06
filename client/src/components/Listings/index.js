import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import ListingCreateForm from './ListingCreateForm'
import ListingsList from './ListingsList'

export const LISTINGS_QUERY = gql`
  query ListingsQuery {
    listings {
      id
      title
      description
    }
  }
`

const Listings = () => (
  <>
    <h1>Listings</h1>
    <ListingCreateForm />
    <Query query={LISTINGS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <ListingsList listings={data.listings} />
        )
      }}
    </Query>
  </>
)

export default Listings
