import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import { useEffect } from 'react';
import Layout from '@/Container/Layout/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
