import {
  CashIcon,
  ChartSquareBarIcon,
  LibraryIcon,
  HomeIcon,
  UsersIcon,
  BeakerIcon,
} from "@heroicons/react/outline";

export type MainNavigationItem = {
  name: string;
  href: string;
  icon: any; // @TODO: type SVG element properly
};

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  {
    name: "Private sales",
    href: "/privateSales",
    icon: CashIcon,
  },
  {
    name: "Delphi digital",
    href: "/delphiDigital",
    icon: ChartSquareBarIcon,
  },
  { name: "Treasury", href: "/treasury", icon: LibraryIcon },
  { name: "Members", href: "/members", icon: UsersIcon },
  { name: "Tools", href: "/tools", icon: BeakerIcon },
];
