import * as yup from 'yup'

import { ValidationError, GenericError } from '../../utils/errors'

const userSchema = {
  email: yup.string().required('Email address is required').email('Email address is incorrectly formatted'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
}

const createUserSchema = yup.object().shape({
  ...userSchema,
  role: yup.mixed().oneOf(['ADMIN', 'CLIENT']).required('Role is required'),
})

const signUpSchema = yup.object().shape({
  ...userSchema,
})

const defaultRole = 'USER'

const createUser = async (root, { data }, { db, auth }) => {
  // Validate
  await createUserSchema.validate(data)
  const exists = await auth.getUserByEmail(data.email)
    || await db.$exists.user({ email: data.email })
  if (exists) throw new ValidationError('Email address is already in use')

  // Create in database
  const user = await db.createUser({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    role: data.role,
  })

  // Create in firebase
  try {
    await auth.createUser({ uid: user.id, email: data.email, password: data.password })
    await auth.setCustomUserClaims(user.id, { [data.role]: true })
    await db.updateUser({ where: { id: user.id }, data: { authId: user.id } })
  } catch (error) {
    throw error && error.code === 'auth/email-already-exists'
      ? new ValidationError('Email address is already in use')
      : new GenericError()
  }

  return user
}

const signUp = async (root, { data }, { db, auth }) => {
  // Validate
  await signUpSchema.validate(data)
  const exists = await db.users({ where: { email: data.email } })
  if (exists && exists.length > 0) throw new ValidationError('Email address is already in use')

  // Create in database
  const user = await db.createUser({ ...data, role: defaultRole })

  // Create in firebase
  try {
    await auth.createUser({ uid: user.id, email: data.email, password: data.password })
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
  signUp,
}

export default mutations
