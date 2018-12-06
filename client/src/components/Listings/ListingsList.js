import React from 'react'

import ListingItem from './ListingItem'

const ListingsList = ({ listings }) => (
  <ul>
    {listings.map(listing => <ListingItem key={listing.id} listing={listing} />)}
  </ul>
)

export default ListingsList
