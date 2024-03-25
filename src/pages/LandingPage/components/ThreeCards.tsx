import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function ThreeCards() {
  const firstCard = useRef();
  const secondCard = useRef();
  const thirdCard = useRef();
  const mainText = useRef();

  useEffect(() => {
    gsap.fromTo(
      //@ts-ignore
      firstCard.current,
      {
        x: '-1000%',
        y: -100,
        scale: 0
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'ease-out'
      }
    );

    gsap.fromTo(
      //@ts-ignore
      secondCard.current,
      {
        x: '1000%',
        y: -100,
        scale: 0
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'ease-out'
      }
    );

    gsap.fromTo(
      //@ts-ignore
      thirdCard.current,
      {
        y: '1000%',
        scale: 0
      },
      {
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'ease-out'
      }
    );

    gsap.fromTo(
      //@ts-ignore
      mainText.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 2.5,
        ease: 'ease-out'
      }
    );
  }, []);

  const commonClasses = ' absolute rounded-lg shadow-lg opacity-60';

  return (
    <>
      <div
        //@ts-ignore
        ref={firstCard}
        className={
          'top-[35%] left-[10%] w-3/5 h-1/4' +
          ' md:w-2/5 md:left-[20%]' +
          ' lg:w-1/5 lg:left-[35%]' +
          ' z-[-3] bg-secondary shadow-blue-400/90' +
          commonClasses
        }></div>
      <div
        //@ts-ignore
        ref={secondCard}
        className={
          'right-[20%] top-[20%] w-1/3 h-2/6' +
          ' md:w-1/4 md:right-[30%]' +
          ' lg:w-1/5 lg:right-[40%]' +
          ' z-[-2] bg-primary shadow-orange-400/90' +
          commonClasses
        }></div>
      <div
        //@ts-ignore
        ref={thirdCard}
        className={
          'bottom-[20%] right-[10%] w-2/5 h-2/5' +
          ' md:w-2/6 md:right-[20%]' +
          ' lg:w-1/5 lg:right-[35%]' +
          ' bg-quaternary z-[-1] shadow-white-400/90' +
          commonClasses
        }></div>
      <div className="text-center z-10 py-5">
        <h1
          //@ts-ignore
          ref={mainText}
          className="text-5xl font-bold tracking-widest uppercase text-secondary">
          BuzzVerse
        </h1>
      </div>
    </>
    // <>
    //   <div
    //     //@ts-ignore
    //     ref={firstCard}
    //     className="absolute top-[15%] left-1/3 w-1/5 h-1/3 bg-secondary rounded-lg opacity-50 z-[-1] shadow-lg shadow-blue-400/90"></div>
    //   <div
    //     //@ts-ignore
    //     ref={secondCard}
    //     className="absolute right-[35%] top-1/4 w-1/5 h-1/3 bg-primary rounded-lg opacity-60 z-[-1] shadow-lg shadow-orange-400/90"></div>
    //   <div
    //     //@ts-ignore
    //     ref={thirdCard}
    //     className="absolute bottom-[35%] right-[45%] w-1/5 h-1/3 bg-quaternary rounded-lg opacity-60 z-10 shadow-lg shadow-white-400/90"></div>
    //   <div className="text-center z-10 py-5">
    //     <h1
    //       //@ts-ignore
    //       ref={mainText}
    //       className="text-5xl font-bold tracking-widest uppercase text-secondary">
    //       BuzzVerse
    //     </h1>
    //   </div>
    // </>
  );
}
