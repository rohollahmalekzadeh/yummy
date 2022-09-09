import React, {useEffect, useState} from 'react'
import {UserContext} from 'src/contexts/userContext'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from 'src/lib/firebase'

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return () => unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
