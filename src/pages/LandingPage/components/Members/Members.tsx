import { Button } from '@pages/LandingPage/components/Members/ChangeCardButton';
import {
  API,
  Direction
} from '@pages/LandingPage/components/Members/types/TinderCard.ts';
import React, { useState, useMemo, useRef, useEffect } from 'react';

import { CustomCard } from './CustomCard';
import { mockMembers } from './mockData/TeamMates';

export function Members() {
  const [currentIndex, setCurrentIndex] = useState<number>(
    mockMembers.length - 1
  );
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
      Array(mockMembers.length)
        .fill(0)
        .map(_ => React.createRef<API>()),
    []
  );

  const updateCurrentIndex = (index: number) => {
    setCurrentIndex(index);
    currentIndexRef.current = index;
    // if (index === -1) {
    //   setCurrentIndex(mockMembers.length - 1);
    //   currentIndexRef.current = mockMembers.length - 1;
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
    if (canSwipe && currentIndex < mockMembers.length) {
      await childRefs[currentIndex].current?.swipe(direction); // Swipe the card!
    }
  };

  function restoreAllCards() {
    childRefs.forEach(ref => {
      ref.current?.restoreCard(); // Assuming `restoreCard` is the method name
    });
    // Optionally, reset any other state that's related to card swiping
    setCurrentIndex(mockMembers.length - 1); // Reset index if necessary
    setLastDirection(undefined); // Reset last direction if you're using it to display info
  }

  // increase current index and show card

  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-white">
      <div className="h-[12%] py-1 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-black">
          React Tinder Card
        </h1>
      </div>

      <div
        className="w-[50vw] max-w-[70vw] h-[50vh] grow flex flex-col justify-center items-center"
        // onClick={() => {
        //   const direction = currentIndex % 2 === 0 ? 'up' : 'down';
        //   swipe(direction);
        // }}
      >
        {mockMembers.map((character, index) => (
          <CustomCard
            key={character.name}
            character={character}
            index={index}
            childRefs={childRefs}
            swiped={swiped}
            outOfFrame={outOfFrame}
          />
        ))}
      </div>
      <div className="flex flex-wrap m-5 max-md:flex-col h-[10%] w-full justify-center bg-quaternary">
        <Button
          style={{
            backgroundColor: canSwipe ? undefined : '#c3c4d3',
            marginRight: '20px'
          }}
          onClick={() => swipe('left')}>
          Swipe left!
        </Button>
        <Button
          style={{
            backgroundColor: canSwipe ? undefined : '#c3c4d3',
            marginLeft: '20px'
          }}
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
            'w-full justify-center flex items-center animate-bounce text-black '
          }>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
    </div>
  );
}
