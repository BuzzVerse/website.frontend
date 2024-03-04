export function ThreeCards() {
  return (
    <>
      <div className="absolute top-[15%] left-1/3 w-1/6 h-1/3 bg-secondary rounded-lg opacity-50 z-[-1] shadow-lg shadow-blue-400/90"></div>
      <div className="absolute right-[35%] top-1/4 w-1/5 h-1/3 bg-primary rounded-lg opacity-60 z-[-1] shadow-lg shadow-orange-400/90"></div>
      <div className="absolute bottom-[35%] right-[45%] w-1/6 h-1/3 bg-quaternary rounded-lg opacity-60 z-10 shadow-lg shadow-white-400/90"></div>
      <div className="text-center z-10 py-5">
        <h1 className="text-5xl font-bold tracking-widest uppercase text-secondary">
          BuzzVerse
        </h1>
      </div>
    </>
  );
}
