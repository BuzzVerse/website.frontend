import { MainView } from '@pages/LandingPage/components/MainView.tsx';
import { ThreeCards } from '@pages/LandingPage/components/ThreeCards.tsx';

export function LandingPage() {
  return (
    <div className="h-full bg-cover bg-fixed relative">
      <div className="flex flex-col items-center h-full">
        <MainView />
        <ThreeCards />
      </div>
    </div>
  );
}
