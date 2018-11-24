import * as yup from 'yup'

const createAvailabilitySchema = yup.object().shape({
  equipment: yup.string().required('Equipment is required'),
  start: yup.date().required('Start date and time are required'),
  end: yup.date().required('End date and time are required'),
  booked: yup.bool(),
  owner: yup.string(),
})

const createAvailability = async (root, { data }, { db }) => {
  // Validate
  await createAvailabilitySchema.validate(data)

  // Create in database
  return db.createAvailability({
    equipment: {
      connect: {
        id: data.equipment,
      },
    },
    start: data.start,
    end: data.end,
    owner: {
      connect: {
        id: data.owner,
      },
    },
  })
}

const mutations = {
  createAvailability,
}

export default mutations
