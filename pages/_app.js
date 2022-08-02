import {Navbar} from '../components'

import '../styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <div className="overflow-y-auto h-screen">
      <Navbar menuITems={['Home', 'Menu', 'Blog', 'About us']} />
      <br />
      <div className="mt-14">
        <Component {...pageProps} />;
      </div>
    </div>
  )
}

export default MyApp
