import * as yup from 'yup'

const createEquipmentSchema = yup.object().shape({
  description: yup.string().required('Email address is required'),
  type: yup.string().required('Type is required'),
  owner: yup.string(),
})

const createEquipment = async (root, { data }, { db }, info) => {
  // Validate
  await createEquipmentSchema.validate(data)

  // Create in database
  return db.mutation.createEquipment({
    description: data.description,
    type: {
      connect: {
        id: data.type,
      },
    },
    owner: {
      connect: {
        id: data.owner,
      },
    },
  }, info)
}

const updateEquipment = async (root, { id, data }, { db }, info) => (data.type
  ? db.mutation.updateEquipment({
    where: { id },
    data: {
      description: data.description,
      type: { connect: { id: data.type } },
    },
  }, info)
  : db.mutation.updateEquipment({
    where: { id },
    data: {
      description: data.description,
    },
  }, info))

const mutations = {
  createEquipment,
  updateEquipment,
}

export default mutations
