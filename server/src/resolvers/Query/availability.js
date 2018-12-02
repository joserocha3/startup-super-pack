const availabilities = (root, args, { db }, info) => db.query.availabilities(null, info)

const availability = (root, { id }, { db }, info) => db.query.availabilities({ id }, info)

const queries = {
  availabilities,
  availability,
}

export default queries
