import { Anchor } from '@components/Anchor.tsx';
import { AnchorLinkItemProps } from 'antd/lib/anchor/Anchor';

import BvLogo from '/assets/bv_logo_dark.svg';

const SocialItems: AnchorLinkItemProps[] = [
  {
    key: 'github',
    href: 'https://github.com/BuzzVerse',
    title: 'Github'
  }
  // {
  //   key: 'facebook',
  //   href: 'https://www.facebook.com',
  //   title: 'Facebook'
  // },
  // {
  //   key: 'instagram',
  //   href: 'https://www.instagram.com',
  //   title: 'Instagram'
  // }
];

export function Footer() {
  return (
    <div
      className="bg-tertiary justify-center items-center py-6 px-5 font-light mt-20"
      id="contact">
      <div className="w-full flex flex-col md:flex-row md:gap-5">
        <div className="w-full flex gap-5 md:w-fit py-3">
          <div>
            <h1 className="text-2xl tracking-wide mb-3 whitespace-nowrap">
              Obserwuj nas
            </h1>
            <Anchor direction="vertical" MenuItems={SocialItems} />
          </div>
          <div>
            <h1 className="text-2xl pb-3 tracking-wide mb-3">Kontakt</h1>
            <h3 className="flex align-center justify-around flex-col">
              <a href="mailto:contact@buzzverse.dev">contact@buzzverse.dev</a>
              <p className="tracking-wide">64-120 Zielona Góra</p>
              <p>Polska</p>
            </h3>
          </div>
        </div>

        <div className="flex justify-center align-center md:w-full md:justify-end">
          <img
            src={BvLogo}
            alt="BuzzVerse Logo"
            className="w-[65%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] py-5"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between px-10">
        &copy; BuzzVerse {new Date().getFullYear()}
        <span>
          Made with <span className="text-primary">♡</span> by BuzzVerse Team
        </span>
      </div>
    </div>
  );
}
