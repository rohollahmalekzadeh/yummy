import '../styles/globals.css';
import { Navbar } from '../components/index';

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-y-auto h-screen">
      <Navbar />
      <br />
      <div className="mt-14">
        <Component {...pageProps} />;
      </div>
    </div>
  );
}

export default MyApp;
