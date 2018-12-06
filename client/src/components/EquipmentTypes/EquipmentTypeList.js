import React from 'react'

import EquipmentTypeItem from './EquipmentTypeItem'

const EquipmentTypeList = ({ equipmentTypes }) => (
  <ul>
    {equipmentTypes.map(equipmentType => <EquipmentTypeItem key={equipmentType.id} equipmentType={equipmentType} />)}
  </ul>
)

export default EquipmentTypeList
