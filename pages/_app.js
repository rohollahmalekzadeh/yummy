import React from 'react'
import {Navbar} from '../components'
import UserProvider from '../contexts/userProvider'

import '../styles/globals.css'

function MyApp({Component, session, pageProps}) {
  return (
    <div className="overflow-y-auto h-screen">
      <Navbar menuITems={['Home', 'Menu', 'Blog', 'About us']} />
      <br />
      <div className="mt-14">
        <UserProvider>
          <Component {...pageProps} />;
        </UserProvider>
      </div>
    </div>
  )
}

export default MyApp
