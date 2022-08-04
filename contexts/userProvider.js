import {createContext, useEffect, useState, useContext} from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../lib/firebase'

export const userContext = createContext({
  setCurrentUser: () => {},
  currentUser: {},
})

const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unSubscriber = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      setCurrentUser(user)
    })

    return () => unSubscriber
  }, [])

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}

export const useUser = () => {
  const [currentUser, setCurrentUser] = useContext(userContext)
  return {currentUser, setCurrentUser}
}

export default UserProvider
