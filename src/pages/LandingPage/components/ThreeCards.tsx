export function ThreeCards() {
  return (
    <div className="relative h-[9%] w-full flex justify-center items-center bg-quaternary opacity-85">
      <div className="absolute top-[15%] left-1/3 w-1/6 h-1/3 bg-secondary rounded-md opacity-75	"></div>
      <div className="absolute right-[35%] top-1/4 w-1/5 h-1/3 bg-secondary rounded-md opacity-50	"></div>
      <div className="absolute bottom-[35%] right-[45%] w-1/6 h-1/3 bg-quaternary rounded-md opacity-50	"></div>
      <div className="text-center z-10 py-5">
        <h1 className="text-5xl font-bold tracking-widest uppercase text-secondary">
          BuzzVerse
        </h1>
        <br />
        <h4 className={'text-secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h4>
      </div>
    </div>
  );
}
