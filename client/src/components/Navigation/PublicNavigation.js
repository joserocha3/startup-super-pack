import React from 'react'
import { Link } from '@reach/router'

import ROUTES from '../../constants/routes'

const PublicNav = () => (
  <ul>
    <li><Link to={ROUTES.LANDING}>Landing</Link></li>
    <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
  </ul>
)

export default PublicNav
