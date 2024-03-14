import { Button } from '@pages/LandingPage/components/Members/Button.tsx';
import {
  API,
  Direction
} from '@pages/LandingPage/components/Members/types/TinderCard.ts';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import kapibara from '/assets/kapibara.jpeg?url';

const db = [
  {
    name: '0 Hendricks',
    url: kapibara
  },
  {
    name: '1 Hendricks',
    url: kapibara
  },
  {
    name: '3 Hendricks',
    url: kapibara
  },
  {
    name: '4 Hendricks',
    url: kapibara
  },
  {
    name: '5 Hendricks',
    url: kapibara
  }
];

export function Members() {
  const [currentIndex, setCurrentIndex] = useState<number>(db.length - 1);
  const [lastDirection, setLastDirection] = useState<Direction>();
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    if (currentIndex !== -1) {
      return;
    }
    console.log('restoreAllCards');
    restoreAllCards();
  }, [currentIndex, currentIndexRef, restoreAllCards]);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(_ => React.createRef<API>()),
    []
  );

  const updateCurrentIndex = (index: number) => {
    setCurrentIndex(index);
    currentIndexRef.current = index;
    // if (index === -1) {
    //   setCurrentIndex(db.length - 1);
    //   currentIndexRef.current = db.length - 1;
    // }
  };

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (
    direction: Direction,
    _nameToDelete: string,
    index: number
  ) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: string, index: number) => {
    console.log(
      `${name} (${index}) () left the screen!`,
      currentIndexRef.current
    );
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= index && childRefs[index].current?.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (direction: Direction) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current?.swipe(direction); // Swipe the card!
    }
  };

  function restoreAllCards() {
    childRefs.forEach(ref => {
      ref.current?.restoreCard(); // Assuming `restoreCard` is the method name
    });
    // Optionally, reset any other state that's related to card swiping
    setCurrentIndex(db.length - 1); // Reset index if necessary
    setLastDirection(undefined); // Reset last direction if you're using it to display info
  }

  // increase current index and show card

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">React Tinder Card</h1>
      <div
        className="w-[20vw] max-w-[360px] h-[300px] flex flex-col justify-center items-center"
        // onClick={() => {
        //   const direction = currentIndex % 2 === 0 ? 'up' : 'down';
        //   swipe(direction);
        // }}
      >
        {db.map((character, index) => (
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
        ))}
      </div>
      <div className="flex flex-wrap m-5  max-md:flex-col">
        <Button
          style={{ backgroundColor: canSwipe ? undefined : '#c3c4d3' }}
          onClick={() => swipe('left')}>
          Swipe left!
        </Button>
        <Button
          style={{ backgroundColor: canSwipe ? undefined : '#c3c4d3' }}
          onClick={() => swipe('right')}>
          Swipe right!
        </Button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2
          className={
            'w-full justify-center flex items-center text-white animate-bounce '
          }>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  );
}
