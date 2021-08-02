import { FC } from 'react';
import Image from 'next/image';

import useAuth from './hooks/useAuth';
import Button from '../ui/Button';
import foxSvg from '../../public/metamask-fox.svg';

type Props = {
  className?: string;
};
const MetamaskButton: FC<Props> = ({ className }) => {
  const { isConnectedWithWeb3, connectWallet, hasAccess, login, logout } = useAuth();

  if (!isConnectedWithWeb3) {
    return (
      <div className={className}>
        <Button onClick={connectWallet} className="border-gray-600 bg-gray-50">
          <span className="pr-2">Connect</span>
          <Image src={foxSvg} alt="metamask" />
        </Button>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className={className}>
        <Button onClick={login} className="border-gray-600 bg-gray-50">
          <span className="pr-2">Login</span>
          <Image src={foxSvg} alt="metamask" />
        </Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <Button onClick={logout} className="border-gray-600 bg-gray-50">
        <span className="pr-2">Logout</span>
        <Image src={foxSvg} alt="metamask" />
      </Button>
    </div>
  );
};

export default MetamaskButton;
