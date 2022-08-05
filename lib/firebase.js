import {initializeApp, getApp, getApps} from 'firebase/app'

import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

export const firebaseConfig = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const db = getFirestore()

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapShop = await getDoc(userDocRef)

  if (!userSnapShop.exists()) {
    const {email} = userAuth
    const created_at = new Date()

    try {
      await setDoc(userDocRef, {email, created_at, ...additionalInformation})
    } catch (e) {
      console.log('error creation the user', e)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangedListener = async (callback) => {
  console.log(auth)
  return onAuthStateChanged(auth, callback)
}

export const singOutUser = async () => await signOut(auth)
