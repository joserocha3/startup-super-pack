import { useApolloClient } from 'react-apollo-hooks'

import useAuthState from '../../utilities/useAuthState'

const SignOut = () => {
  const { user } = useAuthState()
  const client = useApolloClient()

  // Apollo caches all query results, get rid of them when the login state changes
  if (!user.uid) client.clearStore()
  return null
}

export default SignOut
