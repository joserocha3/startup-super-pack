import user from './user'
import equipmentType from './equipmentType'
import equipment from './equipment'
import availability from './availability'

const Mutation = {
  ...user,
  ...equipmentType,
  ...equipment,
  ...availability,
}

export default Mutation
