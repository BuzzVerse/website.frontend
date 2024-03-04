import { Humidity } from '@pages/LandingPage/components/Grafana/Humidity.tsx';
import { LastMeasurement } from '@pages/LandingPage/components/Grafana/LastMeasurement.tsx';
import { Raspbery } from '@pages/LandingPage/components/Grafana/Raspbery.tsx';
import { TemparatureChart } from '@pages/LandingPage/components/Grafana/TemparatureChart.tsx';
import { Temperature } from '@pages/LandingPage/components/Grafana/Temperature.tsx';
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
        <div className="h-[250px] flex items-center w-full flex-col ">
          <LastMeasurement />
        </div>
        <div className="h-[19%] w-screen flex justify-start items-center flex-col ">
          <div className="h-[400px] flex flex-row w-full justify-around max-sm:flex-col min-md:w-1/3">
            <Humidity />
            <Temperature />
            <Raspbery />
          </div>
          <div className="h-screen w-screen">
            {/*idk why this */}
            <TemparatureChart />
          </div>
        </div>
      </div>
    </div>
  );
}
