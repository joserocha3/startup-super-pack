const equipmentTypes = (root, args, { db }, info) => db.query.equipmentTypes(null, info)

const queries = {
  equipmentTypes,
}

export default queries
