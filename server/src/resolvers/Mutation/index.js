import user from './user'
import equipmentType from './equipmentType'
import equipment from './equipment'
import listing from './listing'

const Mutation = {
  ...user,
  ...equipmentType,
  ...equipment,
  ...listing,
}

export default Mutation
