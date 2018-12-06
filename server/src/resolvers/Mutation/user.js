import * as yup from 'yup'

import { ValidationError, GenericError } from '../../utils/errors'
import { getFirebaseUser } from '../../utils/auth'

const userSchema = {
  email: yup.string().required('Email address is required').email('Email address is incorrectly formatted'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
}

const signUpSchema = yup.object().shape({
  ...userSchema,
})

const createUserSchema = yup.object().shape({
  ...userSchema,
  role: yup.mixed().oneOf(['ADMIN', 'CLIENT']).required('Role is required'),
})

const signUp = async (root, { data }, { db, auth }) => {
  // Validate
  await signUpSchema.validate(data)
  const exists = await getFirebaseUser(data.email) || await db.$exists.user({ email: data.email })
  if (exists) throw new ValidationError('Email address is already in use')

  // Create in database
  const user = await db.createUser({ ...data, role: 'USER' })

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

const createUser = async (root, { data }, { db, auth }) => {
  // Validate
  await createUserSchema.validate(data)
  const exists = await getFirebaseUser(data.email) || await db.$exists.user({ email: data.email })
  if (exists) throw new ValidationError('Email address is already in use')

  // Create in database - leave out password
  const user = await db.createUser({
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    role: data.role,
  })

  // Create in firebase
  const claims = {
    admin: data.role === 'ADMIN',
    client: data.role === 'CLIENT',
  }

  try {
    await auth.createUser({ uid: user.id, email: data.email, password: data.password })
    await auth.setCustomUserClaims(user.id, claims)
    await db.updateUser({ where: { id: user.id }, data: { authId: user.id } })
  } catch (error) {
    throw error && error.code === 'auth/email-already-exists'
      ? new ValidationError('Email address is already in use')
      : new GenericError()
  }

  return user
}


const updateUser = async (root, { id, data }, { db, auth }) => {
  // Validate
  const exists = await db.$exists.user({ id })
  if (!exists) throw new ValidationError('Email address not found')

  // Update in database
  const user = await db.createUser(data)

  // Update in firebase
  try {
    await auth.updateUser(user.authId, { email: data.email, password: data.password })
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
  signUp,
  createUser,
  updateUser,
}

export default mutations
