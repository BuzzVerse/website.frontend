import { ThreeCards } from './components/ThreeCards';

export function LandingPage() {
  return (
    <div className="h-full bg-cover bg-fixed relative">
      <div className="flex justify-center h-full">
        <ThreeCards />
      </div>
    </div>
  );
}
