import { GrafanaIframeProps } from '@pages/LandingPage/components/Grafana/Utils/GrafanaProps.ts';

export function LastMeasurement({
  width = '100%',
  height = '100%'
}: GrafanaIframeProps) {
  return (
    <div
      style={{
        width: width,
        height: height
      }}>
      <iframe
        src="https://grafana.buzzverse.dev/d-solo/e8d112d9-3e3b-4b51-afbd-1b4b4e454464/spanish-dashboard?orgId=1&refresh=30s&from=1709584331103&to=1709627531103&panelId=6"
        width={width}
        height={height}
        frameBorder="0"></iframe>
    </div>
  );
}
