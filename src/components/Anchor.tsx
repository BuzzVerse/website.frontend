import { Anchor as AntAnchor } from 'antd';
import { AnchorLinkItemProps } from 'antd/lib/anchor/Anchor';

interface AnchorProps {
  MenuItems: AnchorLinkItemProps[];
  direction: 'horizontal' | 'vertical';
}

export function Anchor({ MenuItems, direction }: AnchorProps) {
  return (
    <AntAnchor direction={direction} targetOffset={120} items={MenuItems} />
  );
}
