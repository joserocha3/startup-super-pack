import React, { useState } from 'react'

import useAuthState from '../../utilities/useAuthState'

const PasswordResetForm = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { sendPasswordResetEmail } = useAuthState()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendPasswordResetEmail(email)
    } catch (err) {
      setError(err)
    }

    setLoading(false)
  }

  const onChange = (e) => {
    setEmail(e.target.value)
  }

  const isInvalid = email === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={loading || isInvalid} type="submit">Send Reset Link</button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default PasswordResetForm
