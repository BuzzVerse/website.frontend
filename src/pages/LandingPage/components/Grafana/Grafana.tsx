import { Humidity } from '@pages/LandingPage/components/Grafana/components/Humidity.tsx';
import { LastMeasurement } from '@pages/LandingPage/components/Grafana/components/LastMeasurement.tsx';
import { Pressure } from '@pages/LandingPage/components/Grafana/components/Pressure.tsx';
import { TemparatureChart } from '@pages/LandingPage/components/Grafana/components/TemparatureChart.tsx';
import { Temperature } from '@pages/LandingPage/components/Grafana/components/Temperature.tsx';

export function Grafana() {
  return (
    <div>
      <div className="h-full flex items-center w-full flex-col ">
        <LastMeasurement />
      </div>
      <div className="h-full w-screen flex justify-start items-center flex-col ">
        <div className="h-full flex flex-row w-full justify-around max-sm:flex-col min-md:w-1/3">
          <Humidity />
          <Temperature />
          <Pressure />
        </div>
        <div className="w-screen">
          <TemparatureChart />
        </div>
      </div>
    </div>
  );
}
