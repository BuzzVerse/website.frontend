import { Anchor } from '@components/Anchor.tsx';
import { MenuItems } from '@components/common/MenuItems.ts';

import BvLogo from '/assets/bv_logo_dark.svg';

export function Footer() {
  return (
    <div className="bg-tertiary justify-center items-center py-5 font-light">
      <div className="w-full flex justify-around">
        <div className="w-4/5 flex flex-row justify-between px-10">
          <div>
            <h1 className="text-2xl pb-3">Kontakt</h1>
            <h3>
              <a href="mailto:contact@buzzverse.dev">contact@buzzverse.dev</a>
            </h3>
            <h3>
              <p className={'py-3'}>64-120 Zielona Góra</p>
              <p>Polska</p>
            </h3>
          </div>
          <div>
            <h1 className="text-2xl pb-3">BuzzVerse</h1>
            <h3>
              <a href="#asd">
                {' '}
                <Anchor direction="vertical" MenuItems={MenuItems} />
              </a>
            </h3>
          </div>
          <div>
            <h1 className="text-2xl pb-3">Obserwuj nas</h1>
          </div>
        </div>
        <div className="w-1/5">
          <img src={BvLogo} alt="BuzzVerse Logo" />{' '}
        </div>
      </div>
      <div className="flex flex-row justify-between px-10">
        <span>&copy; BuzzVerse {new Date().getFullYear()}</span>{' '}
        <span>Made with ♡ by BuzzVerse Team</span>
      </div>
    </div>
  );
}