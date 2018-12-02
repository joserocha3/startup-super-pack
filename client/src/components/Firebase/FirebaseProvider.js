import React from 'react'
import app from '@firebase/app'
import '@firebase/auth'

import FirebaseContext from './context'
import AUTH from '../../constants/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

const INITIAL_STATE = {
  user: null,
  token: '',
}

class FirebaseProvider extends React.Component {
  constructor(props) {
    super(props)
    app.initializeApp(config)
    this.auth = app.auth()
    this.state = {
      ...INITIAL_STATE,
      loading: true,
    }
  }

  componentDidMount() {
    this.auth.onAuthStateChanged(async (user) => {
      this.setState({ loading: false })
      if (user) {
        const token = await this.auth.currentUser.getIdToken()
        const idTokenResult = await this.auth.currentUser.getIdTokenResult()
        localStorage.setItem(AUTH.TOKEN, token)
        this.setState({
          user: {
            email: user.email,
            uid: user.uid,
            roles: [idTokenResult.claims.ADMIN ? 'ADMIN' : 'CLIENT'],
          },
          token,
        })
      } else {
        localStorage.removeItem(AUTH.TOKEN)
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

  render() {
    const { user, token, loading } = this.state
    const { children } = this.props

    const auth = {
      user,
      token,
      createUserWithEmailAndPassword: this.createUserWithEmailAndPassword,
      signInWithEmailAndPassword: this.signInWithEmailAndPassword,
      signOut: this.signOut,
      sendPasswordResetEmail: this.sendPasswordResetEmail,
      updatePassword: this.updatePassword,
      onAuthUserListener: this.onAuthUserListener,
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

export default FirebaseProvider
