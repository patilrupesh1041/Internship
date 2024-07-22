import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import "@/styles/globals.css";
import Layout from '@/Container/Layout/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="description" content="This is a resume website to show my work and experience." />
        <meta name="author" content="kaustubhds" />
        <title>Portfolio</title>

        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
