const me = (root, args, context) => context.user

const users = (root, args, context) => context.db.users()

const queries = {
  me,
  users,
}

export default queries
