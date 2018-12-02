const me = (root, args, { user, db }, info) => db.query.user({ where: { id: user.id } }, info)

const users = (root, args, { db }, info) => db.query.users(null, info)

const user = (root, { id }, { db }, info) => db.query.users({ id }, info)

const queries = {
  me,
  users,
  user,
}

export default queries
