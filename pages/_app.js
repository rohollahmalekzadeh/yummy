import React from 'react'
import {Navbar} from '../components'
import {UserProvider} from '../contexts/userProvider'

import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <UserProvider>
      <div className="overflow-y-auto overflow-x-hidden h-screen">
        <Navbar menuITems={['Home', 'Menu', 'Blog', 'About us']} />
        <br />
        <div className="mt-14">
          <Component {...pageProps} />;
        </div>
      </div>
    </UserProvider>
  )
}

export default MyApp
