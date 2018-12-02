import React from 'react'
import { Link } from '@reach/router'

import ROUTES from '../../constants/routes'

const PasswordResetLink = () => <p><Link to={ROUTES.PASSWORD_RESET}>Forgot Password?</Link></p>

export default PasswordResetLink
