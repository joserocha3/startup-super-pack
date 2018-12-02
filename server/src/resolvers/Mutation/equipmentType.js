import * as yup from 'yup'

const createEquipmentTypeSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
})

const createEquipmentType = async (root, { data }, { db }, info) => {
  // Validate
  await createEquipmentTypeSchema.validate(data)

  // Create in database
  return db.mutation.createEquipmentType(data, info)
}

const updateEquipmentType = async (root, { id, data }, { db }, info) => db.mutation.updateEquipmentType({ where: { id }, data }, info)

const mutations = {
  createEquipmentType,
  updateEquipmentType,
}

export default mutations
