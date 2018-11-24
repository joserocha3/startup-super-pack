import * as yup from 'yup'

const createEquipmentSchema = yup.object().shape({
  description: yup.string().required('Email address is required'),
  type: yup.string().required('Type is required'),
  owner: yup.string(),
})

const createEquipment = async (root, { data }, { db }) => {
  // Validate
  await createEquipmentSchema.validate(data)

  // Create in database
  return db.createEquipment({
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
  })
}

const mutations = {
  createEquipment,
}

export default mutations
