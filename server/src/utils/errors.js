import { ApolloError } from 'apollo-server'

class AuthenticationError extends ApolloError {
  constructor(message = 'authentication-error') {
    super(message, 'authentication-error')

    Object.defineProperty(this, 'name', { value: 'AuthenticationError' })
  }
}

class AuthorizationError extends ApolloError {
  constructor(message = 'authorization-error') {
    super(message, 'authorization-error')

    Object.defineProperty(this, 'name', { value: 'AuthorizationError' })
  }
}

class GenericError extends ApolloError {
  constructor(message = 'unknown-error') {
    super(message, 'unknown-error')

    Object.defineProperty(this, 'name', { value: 'UnknownError' })
  }
}

class ValidationError extends ApolloError {
  constructor(message = 'validation-error') {
    super(message, 'validation-error')

    Object.defineProperty(this, 'name', { value: 'ValidationError' })
  }
}

export {
  AuthenticationError,
  AuthorizationError,
  GenericError,
  ValidationError,
}
