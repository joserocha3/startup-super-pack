import availability from './availability'
import equipment from './equipment'
import equipmentType from './equipmentType'
import user from './user'

const Mutation = {
  ...availability,
  ...equipment,
  ...equipmentType,
  ...user,
}

export default Mutation
