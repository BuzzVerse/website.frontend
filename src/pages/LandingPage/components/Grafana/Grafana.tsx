import { Humidity } from '@pages/LandingPage/components/Grafana/components/Humidity.tsx';
import { LastMeasurement } from '@pages/LandingPage/components/Grafana/components/LastMeasurement.tsx';
import { Pressure } from '@pages/LandingPage/components/Grafana/components/Pressure.tsx';
import { TemparatureChart } from '@pages/LandingPage/components/Grafana/components/TemparatureChart.tsx';
import { Temperature } from '@pages/LandingPage/components/Grafana/components/Temperature.tsx';

export function Grafana() {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center my-10">
        <div className="w-full px-5">
          <LastMeasurement />
        </div>
        <div className="flex flex-col w-full px-5 md:flex-row gap-5 py-5">
          <Humidity />
          <Temperature />
          <Pressure />
        </div>
        <div className="w-full px-5">
          <TemparatureChart />
        </div>
      </div>
    </>
  );
}
