import React, { useState } from 'react'

import useAuthState from '../../utilities/useAuthState'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
}

const PasswordChangeForm = () => {
  const [form, setForm] = useState(INITIAL_STATE)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { updatePassword } = useAuthState()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await updatePassword(form.passwordOne)
    } catch (err) {
      setError(err)
    }

    setForm(INITIAL_STATE)
    setLoading(false)
  }

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const isInvalid = form.passwordOne !== form.passwordTwo || form.passwordOne === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name="passwordOne"
        value={form.passwordOne}
        onChange={onChange}
        type="password"
        placeholder="New Password"
        autoComplete="password"
      />
      <input
        name="passwordTwo"
        value={form.passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm New Password"
        autoComplete="password"
      />
      <button disabled={loading || isInvalid} type="submit">Reset Password</button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default PasswordChangeForm
