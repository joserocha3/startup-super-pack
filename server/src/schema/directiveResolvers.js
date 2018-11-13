import { AuthenticationError } from 'apollo-server'

const isAuthenticated = async (next, source, { checkIfEmailIsVerified }, context) => {
  if (!context.user || !context.user.emailAddress) throw new AuthenticationError('not-authorized')
  if (checkIfEmailIsVerified && !context.user.emailVerified) throw new Error('email-unverified')
  return next()
}

const hasRole = async (next, source, { roles }, context) => {
  if (roles.includes(context.user.role)) return next()
  throw new AuthenticationError('not-authorized')
}

export { isAuthenticated, hasRole }
