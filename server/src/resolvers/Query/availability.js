const availabilities = (root, args, { db }, info) => db.query.availabilities(null, info)

const queries = {
  availabilities,
}

export default queries
