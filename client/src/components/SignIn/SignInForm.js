import React from 'react'

import Firebase from '../Firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInForm extends React.Component {
  state = INITIAL_STATE

  onSubmit = async (event, signInWithEmailAndPassword) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await signInWithEmailAndPassword(email, password)
    } catch (error) {
      this.setState({ error })
    }
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value })

  render() {
    const { email, password, error } = this.state

    const isInvalid = password === '' || email === ''

    return (
      <Firebase>
        {({ auth }) => (
          <form onSubmit={event => this.onSubmit(event, auth.signInWithEmailAndPassword)}>
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">Sign In</button>
            {error && <p>{error.message}</p>}
          </form>
        )}
      </Firebase>
    )
  }
}

export default SignInForm
