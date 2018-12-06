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
  const Authorization = headers.authorization ? headers.authorization : ''
  const token = Authorization.replace('Bearer ', '')

  // Easy testing when developing

  if (!token && process.env.NODE_ENV === 'development' && process.env.TEST_AUTH) {
    return {
      id: '24',
      authId: '24',
      email: 'jack.bauer@ctu.com',
      firstName: 'Jack',
      lastName: 'Bauer',
      admin: true,
    }
  }

  // Use a real token

  if (!token) throw new AuthenticationError('Not authorized!')

  let authId

  try {
    const verifiedToken = await auth.verifyIdToken(token)
    authId = verifiedToken.uid
  } catch (error) {
    throw new AuthenticationError('Invalid token!')
  }

  // Return the user from database

  try {
    const user = await db.user({ authId })
    return {
      admin: !!user.role === 'ADMIN',
      client: !!user.role === 'CLIENT',
      ...user,
    }
  } catch (error) {
    throw new AuthenticationError('No user found!')
  }
}

const getFirebaseUser = async (email) => {
  try {
    return await fbAuth.getUserByEmail(email)
  } catch (error) {
    return null
  }
}

export {
  fbAuth as default,
  getUser,
  getFirebaseUser,
}
