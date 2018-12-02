import React from 'react'

import Firebase from '../Firebase'

const INITIAL_STATE = {
  email: '',
  error: null,
}

class PasswordResetForm extends React.Component {
  state = INITIAL_STATE

  onSubmit = async (event, sendPasswordResetEmail) => {
    event.preventDefault()

    const { email } = this.state

    try {
      await sendPasswordResetEmail(email)
      this.setState(INITIAL_STATE)
    } catch (error) {
      this.setState({ error })
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    const { email, error } = this.state

    const isInvalid = email === ''

    return (
      <Firebase>
        {({ auth }) => (
          <form onSubmit={event => this.onSubmit(event, auth.sendPasswordResetEmail)}>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <button disabled={isInvalid} type="submit">Send Reset Link</button>
            {error && <p>{error.message}</p>}
          </form>
        )}
      </Firebase>
    )
  }
}

export default PasswordResetForm
