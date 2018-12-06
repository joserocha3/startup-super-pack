const listings = (root, args, { db, user }, info) => {
  const condition = user.admin
    ? {}
    : { where: { owner: { id: user.id } } }
  return db.query.listings(condition, info)
}

const listing = (root, { id }, { db, user }, info) => {
  const condition = user.admin
    ? { where: { id } }
    : { where: { id, owner: { id: user.id } } }
  return db.query.listing(condition, info)
}

const queries = {
  listings,
  listing,
}

export default queries
