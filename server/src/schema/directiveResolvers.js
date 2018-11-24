import { AuthenticationError, AuthorizationError } from '../utils/errors'

const isAuthenticated = async (next, source, { checkIfEmailIsVerified }, { user }) => {
  if (!user || !user.emailAddress) throw new AuthenticationError('Not authenticated')
  if (checkIfEmailIsVerified && !user.emailVerified) throw new Error('Email not verified')
  return next()
}

const hasRole = async (next, source, { roles }, { user }) => {
  if (!roles.includes(user.role)) throw new AuthorizationError('Not authorized')
  return next()
}

export { isAuthenticated, hasRole }
