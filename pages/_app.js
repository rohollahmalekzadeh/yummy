import React from 'react'
import {Header} from '../src/components'
import {UserProvider} from '../src/contexts/userProvider'
import {ShoppingCartProvider} from '../src/contexts/ShoppingCartContext'

import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <div className="overflow-y-auto overflow-x-hidden h-screen">
          <Header menuITems={['Home', 'Menu', 'Blog', 'About us']} />
          <br />
          <div className="mt-14">
            <Component {...pageProps} />;
          </div>
        </div>
      </ShoppingCartProvider>
    </UserProvider>
  )
}

export default MyApp
