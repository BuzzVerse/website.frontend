interface ThreeCardsProsp {
  primarySizeAndOffset: [number, number, number];
  secondarySizeAndOffset: [number, number, number];
  tertiarySizeAndOffset: [number, number, number];
}

export function ThreeCards({
  primarySizeAndOffset,
  secondarySizeAndOffset,
  tertiarySizeAndOffset
}: ThreeCardsProsp) {
  return (
    <div className="relative h-2/3 w-1/2 flex justify-center items-center">
      <div className="absolute left-0 w-1/6 h-1/6 bg-teal-700 rounded-md "></div>
      <div className="absolute left-1/3 top-full  w-1/6 h-1/6 bg-secondary rounded-md "></div>
      <div className="absolute right-0 w-1/6 h-1/6 bg-quaternary rounded-md "></div>
      <div className="absolute text-center">
        <p className="text-5xl font-bold text-tertiary tracking-widest uppercase">
          BuzzVerse
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
