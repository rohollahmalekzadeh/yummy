import React from 'react'
import {Header} from '../src/components'
import {UserProvider} from '../src/contexts/userProvider'
import {ShoppingCartProvider} from '../src/utils/hocs/shoppingCartProvider'
import {BookmarkProvider} from '../src/utils/hocs/bookmarkProvider'

import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <BookmarkProvider>
          <div className="overflow-y-auto overflow-x-hidden h-screen">
            <Header menuITems={['Home', 'Menu', 'Blog', 'About us']} />
            <br />
            <div className="mt-14">
              <Component {...pageProps} />;
            </div>
          </div>
        </BookmarkProvider>
      </ShoppingCartProvider>
    </UserProvider>
  )
}

export default MyApp
