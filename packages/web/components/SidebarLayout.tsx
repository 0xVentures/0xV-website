import { FC, useState } from 'react';

import SidebarDesktop from '../components/navigation/SidebarDesktop';
import SidebarMobile from '../components/navigation/SidebarMobile';
import { navigation } from '../components/navigation/navigation';
import TopNavigationBar from '../components/navigation/TopNavigationBar';
import useAuth from './auth/hooks/useAuth';

const SidebarLayout: FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { hasAccess } = useAuth();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {hasAccess && (
        <>
          <SidebarMobile
            navigation={navigation}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <SidebarDesktop navigation={navigation} />
        </>
      )}

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <TopNavigationBar setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
