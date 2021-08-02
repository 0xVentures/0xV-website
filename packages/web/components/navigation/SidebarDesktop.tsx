import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import type { MainNavigationItem } from './navigation';

import bannerJpg from '../../public/banner.jpg';
import { classNames } from '../../helpers/classNames';
import useAuth from '../auth/hooks/useAuth';
import SidebarExternalLinks from './SidebarExternalLinks';

type Props = {
  navigation: MainNavigationItem[];
};
const SidebarDesktop: FC<Props> = ({ navigation }) => {
  const router = useRouter();
  const { hasAccess } = useAuth();

  const isActive = (path: string): boolean => path === router.pathname;

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 py-4 bg-gray-900 relative">
            <Image src={bannerJpg} objectPosition="50% 50%" layout="fill" alt="0xVentures logo" />
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              {hasAccess &&
                navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        isActive(item.href)
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                      )}>
                      <item.icon
                        className={classNames(
                          isActive(item.href)
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
            </nav>
            <SidebarExternalLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
