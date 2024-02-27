import { Anchor as AntAnchor } from 'antd';

export function Anchor({ items, direction }) {
  return <AntAnchor direction={direction} items={items} />;
}
