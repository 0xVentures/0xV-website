import { FC, createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useEthers } from '@usedapp/core';
import { toast } from 'react-toastify';

import { STORAGE_AUTH_KEY } from './constants';
import VERIFICATION_MESSAGE from '../../config/verificationMessage';

const AuthContext = createContext<any>({
  isConnectedWithWeb3: false,
  activateBrowserWallet: () => {},
  hasAccess: false,
  login: async () => {},
  logout: () => {},
  verify: async () => {}
});

const AuthProvider: FC = ({ children }) => {
  const { activateBrowserWallet, account, active, library: web3 } = useEthers();
  const [authToken, setAuthToken] = useState<string>('');
  const [isConnectedWithWeb3, setIsConnectedWithWeb3] = useState(() => Boolean(active && account));
  const [hasAccess, setHasAccess] = useState(() => Boolean(isConnectedWithWeb3 && authToken));

  const getAccessToken = (): string => {
    const token = localStorage.getItem(STORAGE_AUTH_KEY) || '';
    if (authToken !== token) {
      setAuthToken(token);
    }
    return token;
  };

  useEffect(() => {
    const token = getAccessToken();
    setAuthToken(token);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setHasAccess(isConnectedWithWeb3 && Boolean(authToken));
  }, [isConnectedWithWeb3, authToken]);

  useEffect(() => {
    setIsConnectedWithWeb3(Boolean(active && account));
  }, [active, account]);

  const logout = () => {
    localStorage.setItem(STORAGE_AUTH_KEY, '');
    setHasAccess(false);
    setAuthToken('');
    delete axios.defaults.headers.common['Authorization'];
  };

  const connectWallet = async () => {
    if (!isConnectedWithWeb3) {
      try {
        await activateBrowserWallet(undefined, true);
      } catch (e) {
        toast.error(e.message);
        return;
      }
    }
  };

  const login = async () => {
    try {
      const { data: nonce } = await axios.get(`/auth/nonce?address=${account}`);

      if (!nonce) {
        toast.error('Requested account is not a valid ethereum address.');
        return;
      }

      if (!web3) {
        throw new Error('No web3 provider found');
      }
      const signer = web3.getSigner();
      const signature = await signer.signMessage(`${VERIFICATION_MESSAGE} ${nonce}`);
      const { data: jwt } = await axios.post('/auth', {
        signature,
        address: account
      });
      localStorage.setItem(STORAGE_AUTH_KEY, jwt);
      setAuthToken(jwt);
      axios.defaults.headers.common = { Authorization: `Bearer ${jwt}` };
    } catch (e) {
      toast.error(e.message || 'Unknown error 🐛');
    }
  };

  const verify = async () => {
    try {
      if (authToken) {
        const { data } = await axios.get(`/auth/verify?token=${authToken}`);
        return data === 'verified';
      }
    } catch (e) {
      toast.error('Verification has failed, please log in again.');
      setAuthToken('');
      localStorage.setItem(STORAGE_AUTH_KEY, '');
    }
    return false;
  };

  const auth = {
    isConnectedWithWeb3,
    connectWallet,
    activateBrowserWallet,
    hasAccess,
    login,
    logout,
    verify
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
