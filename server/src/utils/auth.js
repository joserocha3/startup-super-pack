import { AuthenticationError } from 'apollo-server'
import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
})

const fbAuth = admin.auth()

const getUser = async ({ headers, auth, db }) => {
  // Validation
  const Authorization = headers.authorization ? headers.authorization : ''
  if (!Authorization) throw new AuthenticationError('Not authorized!')

  // Determine the authentication ID

  const token = Authorization.replace('Bearer ', '')

  let authId

  if (process.env.NODE_ENV === 'development' && process.env.AUTH_TEST_TOKEN === token) {
    // Easy testing when developing
    authId = process.env.AUTH_TEST_TOKEN
  } else {
    // Use a real token
    try {
      const verifiedToken = await auth.verifyIdToken(token)
      authId = verifiedToken.uid
    } catch (error) {
      throw new AuthenticationError('Invalid token!')
    }
  }

  // Return the user from database

  try {
    return db.user({ authId })
  } catch (error) {
    throw new AuthenticationError('Not authorized!')
  }
}

export { fbAuth as default, getUser }
