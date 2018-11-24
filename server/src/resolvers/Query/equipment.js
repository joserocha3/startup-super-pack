const equipments = (root, args, { db }, info) => db.query.equipments(null, info)

const queries = {
  equipments,
}

export default queries
