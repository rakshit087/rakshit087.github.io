import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RealViewportProvider } from 'next-real-viewport';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RealViewportProvider>
      <Component {...pageProps} />
    </RealViewportProvider>
  );
}

export default MyApp;
