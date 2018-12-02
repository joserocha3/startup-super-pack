import React from 'react'
import { Link } from '@reach/router'

import { SignOutButton } from '../SignOut'
import ROUTES from '../../constants/routes'
import ROLES from '../../constants/roles'

const AuthenticatedNav = ({ roles = [] }) => (
  <ul>
    <li><Link to={ROUTES.LANDING}>Landing</Link></li>
    <li><Link to={ROUTES.HOME}>Home</Link></li>
    <li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
    {roles.includes(ROLES.ADMIN) && <li><Link to={ROUTES.ADMIN}>Admin</Link></li>}
    <li><SignOutButton /></li>
  </ul>
)

export default AuthenticatedNav
