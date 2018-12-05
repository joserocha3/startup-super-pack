/* eslint-disable no-param-reassign */
import { SchemaDirectiveVisitor } from 'graphql-tools'
import { defaultFieldResolver, GraphQLString } from 'graphql'
import formatDate from 'dateformat'

import { AuthenticationError, GenericError } from '../utils/errors'

class FormattableDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    const { defaultFormat } = this.args

    field.args.push({
      name: 'format',
      type: GraphQLString,
    })

    field.resolve = async (source, { format, ...otherArgs }, context, info) => {
      const date = await resolve.call(this, source, otherArgs, context, info)
      // If a format argument was not provided, default to the optional
      // defaultFormat argument taken by the @date directive:
      return formatDate(date, format || defaultFormat)
    }

    field.type = GraphQLString
  }
}

class HasRoleDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    const { roles } = this.args

    field.resolve = (...args) => {
      const context = args[2]
      if (!context) throw new GenericError('missing-context')
      if (!context.user) throw new GenericError('missing-user')
      if (!roles.includes(context.user.role)) throw new AuthenticationError('not-authorized')
      return resolve.apply(this, args)
    }
  }
}

class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    const { checkIfEmailIsVerified } = this.args

    field.resolve = (...args) => {
      const context = args[2]
      if (!context) throw new GenericError('missing-context')
      if (!context.user) throw new GenericError('missing-user')
      if (!context.user.email) throw new AuthenticationError('not-authorized')
      if (checkIfEmailIsVerified && !context.user.emailVerified) throw new Error('email-unverified')
      return resolve.apply(this, args)
    }
  }
}

const schemaDirectives = {
  date: FormattableDateDirective, // ex: createdAt(format: "yyyy/mm")
  hasRole: HasRoleDirective,
  isAuthenticated: IsAuthenticatedDirective,
}

export default schemaDirectives
