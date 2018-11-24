const me = (root, args, { user, db }, info) => db.query.user({ where: { id: user.id } }, info)

const users = (root, args, { db }, info) => db.query.users(null, info)

const queries = {
  me,
  users,
}

export default queries
