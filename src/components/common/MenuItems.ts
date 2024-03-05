export interface MenuItem {
  key: string;
  href?: string;
  title: string;
}

export const MenuItems: MenuItem[] = [
  {
    key: 'about-us',
    href: '#about-us',
    title: 'O nas'
  },
  // {
  //   key: 'team',
  //   href: '#team',
  //   title: 'Zespół'
  // },
  {
    key: 'projects',
    href: '#projects',
    title: 'Projekty'
  },
  {
    key: 'contact',
    href: '#contact',
    title: 'Kontakt'
  }
];
