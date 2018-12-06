import React from 'react'

// TODO: remove Field once we implement styles, or move to another file if we keep it
const Field = ({ label, text }) => (
  <span>
    <strong>{`${label}:`}</strong>
    {text}
  </span>
)

const ListingItem = ({ listing }) => (
  <li>
    <Field label="ID" text={listing.id} />
    <Field label="Title" text={listing.title} />
    <Field label="Description" text={listing.description} />
    <Field label="Points" text={listing.points} />
    <Field label="Status" text={listing.status} />
  </li>
)

export default ListingItem
