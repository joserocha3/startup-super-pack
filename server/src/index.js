import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import path from 'path'

import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'
import directiveResolvers from './schema/directiveResolvers'
import schemaDirectives from './schema/schemaDirectives'
import auth, { getUser } from './utils/auth'

// Build application context

const context = async ({ req }) => {
  const params = {
    ...req,
    db: prisma,
    auth,
  } // pass into getUser with ease
  return {
    ...params,
    user: await getUser({ ...params })
  }
}

// Setup the graphql server

const typeDefs = importSchema(path.resolve('src/schema/schema.graphql'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  directiveResolvers,
  schemaDirectives,
  context,
})

// Run the graphql server

const port = process.env.PORT || 4000 // heroku might not run on 4000

server.listen({ port }).then(({ url }) => console.log(`🚀  Server ready at ${url}`))
