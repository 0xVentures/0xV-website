import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { DAppProvider } from '@usedapp/core';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { AuthProvider } from '../components/auth/AuthContext';
import SidebarLayout from '../components/SidebarLayout';
import initFontAwesome from '../helpers/initFontAwesome';
import blockchainConfig from '../config/blockchainConfig';
import setupAxios from '../config/setupAxios';

initFontAwesome();

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setupAxios();
  }, []);

  return (
    <DAppProvider config={blockchainConfig}>
      <AuthProvider>
        <SidebarLayout>
          <Component {...pageProps} />
        </SidebarLayout>
        <ToastContainer />
      </AuthProvider>
    </DAppProvider>
  );
};

export default App;
