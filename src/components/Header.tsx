import { Anchor } from 'antd';

import BvLogo from '/assets/bv_logo_dark.svg';

export const MenuItems = [
  {
    key: 'about-us',
    href: '#about-us',
    title: 'O nas'
  },
  {
    key: 'team',
    href: '#team',
    title: 'Zespół'
  },
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

export function Header() {
  return (
    <>
      <div className="flex justify-start items-center my-3 ">
        <img className="max-h-20" src={BvLogo} alt="BuzzVerse Logo" />{' '}
        <Anchor direction="horizontal" items={MenuItems} />
      </div>
    </>
  );
}
