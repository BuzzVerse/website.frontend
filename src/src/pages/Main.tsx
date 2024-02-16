import { ThreeCards } from '../components/ThreeCards/ThreeCards';

export function Main() {
  return (
    <div className="bg-stripes h-full  bg-cover bg-fixed relative">
      <div className="flex justify-center items-center h-full">
        <ThreeCards
          primarySizeAndOffset={[0, 0, 0]}
          secondarySizeAndOffset={[0, 33.33, 0]}
          tertiarySizeAndOffset={[0, 0, 0]}
        />
      </div>
    </div>
  );
}
