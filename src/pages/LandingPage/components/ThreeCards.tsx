export function ThreeCards() {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <div className="absolute left-0 w-1/6 h-1/3 bg-teal-700 rounded-md opacity-50	"></div>
      <div className="absolute right-0 w-2/6 h-1/3 bg-secondary rounded-md opacity-50	"></div>
      <div className="absolute bottom-0 w-1/6 h-1/6 bg-quaternary rounded-md opacity-50	"></div>
      <div className="text-center z-10 py-5">
        <h1 className="text-5xl font-bold tracking-widest uppercase">
          BuzzVerse
        </h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
      </div>
    </div>
  );
}
