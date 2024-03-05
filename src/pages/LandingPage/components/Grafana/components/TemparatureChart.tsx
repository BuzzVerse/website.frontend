import { GrafanaIframeProps } from '@pages/LandingPage/components/Grafana/Utils/GrafanaProps.ts';

export function TemparatureChart({
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
        src="https://grafana.buzzverse.dev/d-solo/e8d112d9-3e3b-4b51-afbd-1b4b4e454464/spanish-dashboard?orgId=1&refresh=30s&from=1709584422593&to=1709627622594&panelId=2"
        width="100%"
        height="100%"
        frameBorder="0"></iframe>
    </div>
  );
}
