import * as yup from 'yup'

const createEquipmentTypeSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
})

const createEquipmentType = async (root, { data }, { db }) => {
  // Validate
  await createEquipmentTypeSchema.validate(data)

  // Create in database
  return db.createEquipmentType({ ...data })
}

const mutations = {
  createEquipmentType,
}

export default mutations
