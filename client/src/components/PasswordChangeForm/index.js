import React from 'react'

import Firebase from '../Firebase'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class PasswordChangeForm extends React.Component {
  state = INITIAL_STATE

  onSubmit = async (event, updatePassword) => {
    event.preventDefault()

    const { passwordOne } = this.state

    try {
      await updatePassword(passwordOne)
      this.setState(INITIAL_STATE)
    } catch (error) {
      this.setState({ error })
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state

    const isInvalid = passwordOne !== passwordTwo || passwordOne === ''

    return (
      <Firebase>
        {({ auth }) => (
          <form onSubmit={event => this.onSubmit(event, auth.updatePassword)}>
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="New Password"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm New Password"
            />
            <button disabled={isInvalid} type="submit">Reset Password</button>
            {error && <p>{error.message}</p>}
          </form>
        )}
      </Firebase>
    )
  }
}

export default PasswordChangeForm
