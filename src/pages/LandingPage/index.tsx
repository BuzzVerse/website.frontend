import { Grafana } from '@pages/LandingPage/components/Grafana/Grafana.tsx';
import { MainView } from '@pages/LandingPage/components/MainView.tsx';
import { ThreeCards } from '@pages/LandingPage/components/ThreeCards.tsx';

export function LandingPage() {
  return (
    <div className="h-full bg-cover bg-fixed relative">
      <div className="flex flex-col items-center h-full w-full">
        <div className="relative h-[90vh] w-full flex justify-center items-center bg-quaternary opacity-85">
          <ThreeCards />
        </div>
        <MainView />
        <div className="w-full" id="projects">
          <Grafana />
        </div>
      </div>
    </div>
  );
}
