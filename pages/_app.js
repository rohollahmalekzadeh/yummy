import '../styles/globals.css';
import { Navbar } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-y-auto h-screen">
      <Navbar menuITems={['Home', 'Menu', 'Blog', 'About us']} />
      <br />
      <div className="mt-14">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
