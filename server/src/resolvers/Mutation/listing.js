import * as yup from 'yup'

const createListingSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  // equipment: yup.string().required('Equipment is required'),
  // start: yup.date().required('Start date and time are required'),
  // end: yup.date().required('End date and time are required'),
  // booked: yup.bool(),
  // owner: yup.string(),
})

const createListing = async (root, { data }, { db }, info) => {
  // Validate
  await createListingSchema.validate(data)

  // Create in database
  return db.mutation.createListing({
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
  }, info)
}

const updateListing = async (root, { id, data }, { db }, info) => db.mutation.updateListing({
  where: { id },
  data,
}, info)

const listing = {
  createListing,
  updateListing,
}

export default listing
