import * as yup from 'yup'

const createEquipmentSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  status: yup.mixed().oneOf(['PUBLISHED', 'DRAFT']).required(),
  owner: yup.string(),
})

const createEquipment = async (root, { data }, { db }, info) => {
  // Validate
  await createEquipmentSchema.validate(data)

  // Create in database
  return db.mutation.createEquipment({
    data: {
      title: data.title,
      description: data.description,
      status: data.status,
      type: { connect: { id: data.type } },
      owner: { connect: { id: data.owner } },
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

const equipment = {
  createEquipment,
  updateEquipment,
}

export default equipment
