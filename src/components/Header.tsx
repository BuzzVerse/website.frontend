import { Anchor } from '@components/Anchor.tsx';
import { MenuItems } from '@components/common/MenuItems.ts';

import BvLogo from '/assets/bv_logo_dark.svg';

export function Header() {
  return (
    <>
      <div className="flex justify-start items-center my-2">
        <img className="max-h-24 p-3 mr-8" src={BvLogo} alt="BuzzVerse Logo" />{' '}
        <Anchor direction="horizontal" MenuItems={MenuItems} />
      </div>
    </>
  );
}
