import React, { useState } from 'react'

import { auth } from '../Firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [form, setForm] = useState(INITIAL_STATE)
  const [error, setError] = useState(null)

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(form.email, form.password)
    } catch (e) {
      setError(e)
    }
  }

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const isInvalid = form.email === '' || form.password === ''

  return (
    <form onSubmit={onSubmit}>
      <input name="email" value={form.email} onChange={onChange} type="text" placeholder="Email Address" />
      <input name="password" value={form.password} onChange={onChange} type="password" placeholder="Password" />

      <button disabled={isInvalid} type="submit">Sign In</button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignInForm
