const listings = (root, args, { db }, info) => db.query.listings(null, info)

const listing = (root, { id }, { db }, info) => db.query.listing({ where: { id } }, info)

const queries = {
  listings,
  listing,
}

export default queries
