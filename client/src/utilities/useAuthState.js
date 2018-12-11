import { useEffect } from 'react'
import useLoadingValue from './useLoadingValue'

import { auth } from './firebase'

const createUserWithEmailAndPassword = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password)
  } catch (error) {
    throw new Error(error.message)
  }
}

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
  } catch (error) {
    throw new Error('Invalid email address or password')
  }
}

const signOut = () => auth.signOut()

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email)
  } catch (error) {
    throw new Error(error.message)
  }
}

const updatePassword = async (password) => {
  try {
    await auth.currentUser.updatePassword(password)
  } catch (error) {
    throw new Error(error.message)
  }
}

const getIdToken = async () => {
  try {
    return await auth.currentUser.getIdToken()
  } catch (error) {
    throw new Error(error.message)
  }
}

const useAuthState = () => {
  const { loading, setValue, value } = useLoadingValue()

  const getUser = async (user) => {
    const idTokenResult = await auth.currentUser.getIdTokenResult()
    return {
      email: user.email,
      uid: user.uid,
      ...idTokenResult.claims,
    }
  }

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async user => (user
      ? setValue(await getUser(user))
      : setValue(null)))
    return () => listener()
  }, [auth])

  return {
    loading,
    user: value || {},
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updatePassword,
    getIdToken,
  }
}

export default useAuthState
