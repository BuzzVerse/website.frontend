import { AboutUs } from '@pages/LandingPage/components/AboutUs.tsx';
import { Grafana } from '@pages/LandingPage/components/Grafana/Grafana.tsx';
import { Members } from '@pages/LandingPage/components/Members/Members.tsx';
import { ThreeCards } from '@pages/LandingPage/components/ThreeCards.tsx';

export function LandingPage() {
  return (
    <div className="h-full bg-cover bg-fixed relative">
      <div className="flex flex-col items-center h-full w-full bg-quaternary-100">
        <div className="relative h-[90vh] w-full flex justify-center items-center bg-BgLayout opacity-85">
          <ThreeCards />
        </div>
        <div className="h-[80vh] flex justify-center items-center bg-tertiary">
          <AboutUs />
        </div>
        <div className="bg-secondary flex justify-center items-center h-screen w-screen ">
          <Members />
        </div>
        <div id="projects">
          <Grafana />
        </div>
      </div>
    </div>
  );
}
