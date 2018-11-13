import * as yup from 'yup'

import { ValidationError, GenericError } from '../../utils/errors'

const createUserSchema = yup.object().shape({
  email: yup.string().required('Email address is required').email('Email address is incorrectly formatted'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  role: yup.mixed().oneOf(['ADMIN', 'CLIENT']).required('Role is required'),
})

const createUser = async (root, args, { db, auth }) => {
  // Validate
  await createUserSchema.validate(args)
  const exists = await db.users({ where: { email: args.email } })
  if (exists && exists.length > 0) throw new ValidationError('Email address is already in use')

  // Create in database
  const data = {
    email: args.email,
    firstName: args.firstName,
    lastName: args.lastName,
    role: args.role,
  }
  const user = await db.createUser(data)

  // Create in firebase
  try {
    await auth.createUser({ uid: user.id, email: args.email, password: args.password })
    await auth.setCustomUserClaims(user.id, { client: true, admin: false })
    await db.updateUser({ where: { id: user.id }, data: { authId: user.id } })
  } catch (error) {
    throw error && error.code === 'auth/email-already-exists'
      ? new ValidationError('Email address is already in use')
      : new GenericError()
  }

  return user
}

const mutations = {
  createUser,
}

export default mutations
