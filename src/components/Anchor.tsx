import { MenuItem } from '@components/common/MenuItems.ts';
import { Anchor as AntAnchor } from 'antd';

interface AnchorProps {
  MenuItems: MenuItem[];
  direction: 'horizontal' | 'vertical';
}

export function Anchor({ MenuItems, direction }: AnchorProps) {
  return (
    <AntAnchor direction={direction} targetOffset={120} items={MenuItems} />
  );
}
