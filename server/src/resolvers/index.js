import userQueries from './queries/user'
import userMutations from './mutations/user'

module.exports = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
}
