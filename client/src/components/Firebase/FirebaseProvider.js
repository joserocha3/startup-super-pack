import React from 'react'
import firebase from '@firebase/app'
import '@firebase/auth'

import FirebaseContext from './context'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

const INITIAL_STATE = {
  user: null,
}

class FirebaseProvider extends React.Component {
  constructor(props) {
    super(props)
    this.auth = firebase.auth()
    this.state = {
      ...INITIAL_STATE,
      loading: true,
    }
  }

  componentDidMount() {
    this.auth.onAuthStateChanged(async (user) => {
      this.setState({ loading: false })
      if (user) {
        const idTokenResult = await this.auth.currentUser.getIdTokenResult()
        this.setState({
          user: {
            email: user.email,
            uid: user.uid,
            ...idTokenResult.claims,
          },
        })
      } else {
        this.setState(INITIAL_STATE)
      }
    })
  }

  createUserWithEmailAndPassword = async (email, password) => {
    this.setState({ loading: true })
    try {
      await this.auth.createUserWithEmailAndPassword(email, password)
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ loading: false })
      throw new Error(error.message)
    }
  }

  signInWithEmailAndPassword = async (email, password) => {
    this.setState({ loading: true })
    try {
      await this.auth.signInWithEmailAndPassword(email, password)
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ loading: false })
      throw new Error('Invalid email address or password')
    }
  }

  signOut = () => this.auth.signOut()

  sendPasswordResetEmail = async (email) => {
    this.setState({ loading: true })
    try {
      await this.auth.sendPasswordResetEmail(email)
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ loading: false })
      throw new Error(error.message)
    }
  }

  updatePassword = async (password) => {
    this.setState({ loading: true })
    const user = await this.auth.currentUser
    try {
      await user.updatePassword(password)
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ loading: false })
      throw new Error(error.message)
    }
  }

  getIdToken = async () => {
    const { token } = this.state
    try {
      const newToken = await this.auth.currentUser.getIdToken()
      if (newToken !== token) this.setState({ token: newToken })
      return newToken
    } catch (error) {
      throw new Error(error.message)
    }
  }

  render() {
    const { user, loading } = this.state
    const { children } = this.props

    const auth = {
      user,
      createUserWithEmailAndPassword: this.createUserWithEmailAndPassword,
      signInWithEmailAndPassword: this.signInWithEmailAndPassword,
      signOut: this.signOut,
      sendPasswordResetEmail: this.sendPasswordResetEmail,
      updatePassword: this.updatePassword,
      onAuthUserListener: this.onAuthUserListener,
      getIdToken: this.getIdToken,
    }

    const value = {
      auth,
      loading,
    }

    return (
      <FirebaseContext.Provider value={value}>
        {children}
      </FirebaseContext.Provider>
    )
  }
}

const auth = firebase.auth()

export {
  FirebaseProvider as default,
  auth,
}
