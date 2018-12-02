const equipmentTypes = (root, args, { db }, info) => db.query.equipmentTypes(null, info)

const equipmentType = (root, { id }, { db }, info) => db.query.equipmentTypes({ id }, info)

const queries = {
  equipmentTypes,
  equipmentType,
}

export default queries
