import user from './user'
import equipmentType from './equipmentType'
import equipment from './equipment'
import availability from './availability'

const Query = {
  ...user,
  ...equipmentType,
  ...equipment,
  ...availability,
}

export default Query
