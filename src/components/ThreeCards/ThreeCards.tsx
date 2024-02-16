// interface ThreeCardsProsp {
//   primarySizeAndOffset: [number, number, number];
//   secondarySizeAndOffset: [number, number, number];
//   tertiarySizeAndOffset: [number, number, number];
// }

export function ThreeCards() {
  return (
    <div className="relative h-2/3 w-1/2 flex justify-center items-center overflow-hidden">
      <div className="absolute left-[35%] top-[45%] w-[45%] h-[30%] bg-secondary rounded-3xl z-20"></div>
      <div className="absolute left-[19%] top-[43%] w-[30%] h-[20%] bg-primary rounded-3xl z-40"></div>
      <div className="absolute left-[40%] top-[33%] w-[35%] h-[25%] bg-quaternary rounded-3xl z-10"></div>

      <div className="absolute text-center z-50">
        <p className="text-4xl font-bold text-tertiary tracking-widest my-[5%]">
          <span className="uppercase">B</span>uzz
          <span className="uppercase">V</span>erse
        </p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  );
}
