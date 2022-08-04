import type { AppProps } from 'next/app';

import { Header } from '../components';

import '../styles/global.less';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header title="pokexd" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
