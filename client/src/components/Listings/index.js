import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import ListingCreateForm from './ListingCreateForm'
import ListingsList from './ListingsList'

import queries from '../../queries'

const Listings = () => {
  const { loading, error, data } = useQuery(queries.listings.ALL_FIELDS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <h1>Listings</h1>
      <ListingCreateForm />
      <ListingsList listings={data.listings} />
    </>
  )
}

export default Listings
