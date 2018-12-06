const equipments = (root, args, { db, user }, info) => {
  const condition = user.admin
    ? {}
    : { where: { owner: { id: user.id } } }
  return db.query.equipments(condition, info)
}

const equipment = (root, { id }, { db, user }, info) => {
  const condition = user.admin
    ? { where: { id } }
    : { where: { id, owner: { id: user.id } } }
  return db.query.equipment(condition, info)
}

const queries = {
  equipments,
  equipment,
}

export default queries
