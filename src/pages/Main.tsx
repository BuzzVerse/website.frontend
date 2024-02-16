import { Navbar } from '../components/Navbar/Navbar';
import { ThreeCards } from '../components/ThreeCards/ThreeCards';

export function Main() {
  return (
    <div className="bg-stripes h-full">
      <div className="flex flex-col items-center h-full">
        <div>
          <Navbar />
        </div>
        <ThreeCards />
      </div>
    </div>
  );
}
