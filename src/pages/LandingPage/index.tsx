import { Grafana } from '@pages/LandingPage/components/Grafana/Grafana.tsx';
import { MainView } from '@pages/LandingPage/components/MainView.tsx';
import { ThreeCards } from '@pages/LandingPage/components/ThreeCards.tsx';

export function LandingPage() {
  return (
    <div className="h-full bg-cover bg-fixed relative">
      <div className="flex flex-col items-center h-full w-screen">
        <div className="relative h-[9%] w-full flex justify-center items-center bg-quaternary opacity-85">
          <ThreeCards />
        </div>
        <div className="h-[9%] flex justify-between items-center">
          <MainView />
        </div>
        <div className="h-[9%]">
          <Grafana />
        </div>
      </div>
    </div>
  );
}
