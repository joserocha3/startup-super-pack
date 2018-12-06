import React from 'react'

// TODO: remove Field once we implement styles, or move to another file if we keep it
const Field = ({ label, text }) => (
  <span>
    <strong>{`${label}:`}</strong>
    {text}
  </span>
)

const EquipmentItemType = ({ equipmentType }) => (
  <li>
    <Field label="ID" text={equipmentType.id} />
    <Field label="Title" text={equipmentType.title} />
    <Field label="Description" text={equipmentType.description} />
  </li>
)

export default EquipmentItemType
