import { FC } from 'react';

import NotificationBell from './NotificationBell';
import SearchBar from './SearchBar';
import MobileSidebarOpener from './MobileSidebarOpener';
import ProfileDropdown from '../profileMenu/ProfileDropdown';
import MetamaskButton from '../auth/MetamaskButton';
import useAuth from '../auth/hooks/useAuth';
import { profileNavigation } from '../profileMenu/profileNavigation';

type Props = {
  setSidebarOpen: (isOpened: boolean) => void;
};
const TopNavigationBar: FC<Props> = ({ setSidebarOpen }) => {
  const { hasAccess } = useAuth();

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      {hasAccess && <MobileSidebarOpener setSidebarOpen={setSidebarOpen} />}
      <div className="flex-1 px-4 flex justify-between">
        {hasAccess && <SearchBar />}
        {!hasAccess && <div className="flex-1 flex"></div>}

        <div className="ml-4 flex items-center md:ml-6">
          {hasAccess && (
            <>
              <NotificationBell />
              <ProfileDropdown profileNavigation={profileNavigation} />
            </>
          )}

          <MetamaskButton className="ml-4" />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
