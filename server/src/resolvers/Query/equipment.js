const equipments = (root, args, { db }, info) => db.query.equipments(null, info)

const equipment = (root, { id }, { db }, info) => db.query.equipments({ id }, info)

const queries = {
  equipments,
  equipment,
}

export default queries
