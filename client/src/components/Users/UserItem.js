import React from 'react'

// TODO: remove Field once we implement styles, or move to another file if we keep it
const Field = ({ label, text }) => (
  <span>
    <strong>{`${label}:`}</strong>
    {text}
  </span>
)

const UserItem = ({ user }) => (
  <li>
    <Field label="ID" text={user.id} />
    <Field label="Email" text={user.email} />
    <Field label="First Name" text={user.firstName} />
    <Field label="Last Name" text={user.lastName} />
    <Field label="role" text={user.role} />
  </li>
)

export default UserItem
