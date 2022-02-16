import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
import '../styles/globals.scss';

type TProps = {
  Component: React.FunctionComponent<any>,
  pageProps: any,
};

const MyApp = ({ Component, pageProps }: TProps) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;