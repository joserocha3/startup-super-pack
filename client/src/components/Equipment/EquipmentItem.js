import React from 'react'

// TODO: remove Field once we implement styles, or move to another file if we keep it
const Field = ({ label, text }) => (
  <span>
    <strong>{`${label}:`}</strong>
    {text}
  </span>
)

const EquipmentItem = ({ equipment }) => (
  <li>
    <Field label="ID" text={equipment.id} />
    <Field label="Title" text={equipment.title} />
    <Field label="Description" text={equipment.description} />
    <Field label="Status" text={equipment.status} />
  </li>
)

export default EquipmentItem
