import {createContext, useContext} from 'react'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const useUser = () => useContext(UserContext)
