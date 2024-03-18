import { Badge, Card, Space } from 'antd';
import TinderCard from 'react-tinder-card';

import { API, Direction } from './types/TinderCard';

interface CustomCardProps {
  character: {
    name: string;
    url: string;
  };
  index: number;
  childRefs: React.RefObject<API>[];
  swiped: (direction: Direction, nameToDelete: string, index: number) => void;
  outOfFrame: (name: string, index: number) => void;
}

export function CustomCard({
  childRefs,
  character,
  index,
  outOfFrame,
  swiped
}: CustomCardProps) {
  return (
    <div className="flex justify-center absolute h-[50vh] w-[30vw] bg-primary">
      <TinderCard
        ref={childRefs[index]}
        className="absolute"
        key={character.name}
        onSwipe={direction => swiped(direction, character.name, index)}
        onCardLeftScreen={() => outOfFrame(character.name, index)}>
        <div
          style={{ backgroundImage: 'url(' + character.url + ')' }}
          className="relative bg-white w-[30vw] h-[30vh] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.30)] bg-cover bg-center rounded-[20px]">
          <h3 className="absolute text-white m-2.5 bottom-0;">
            {character.name}
          </h3>
        </div>
      </TinderCard>
    </div>
  );
}
