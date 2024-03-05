import { Card } from 'antd';

export function MainView() {
  return (
    <>
      <div
        className="w-full flex p-5 justify-center items-center"
        id="about-us">
        <div className="flex flex-col md:flex-row gap-5 md:gap-16 lg:gap-32 w-1/1 lg:w-4/5">
          <Card title="O nas" className="md:mb-32">
            Koło naukowe BuzzVerse to zespół pasjonatów technologii
            informatycznych. Celem koła jest wywieranie realnych zmian na
            środowisko, a także rozwój umiejętności związanych z systemami
            wbudowanymi, programowaniem czy projektowaniem i implementacją
            urządzeń wbudowanych.
          </Card>
          <Card title="Działalność naukowa" className="md:mt-32">
            W ramach działalności koła realizujemy projekty, które pozwalają nam
            rozwijać nasze umiejętności praktyczne. Dzięki wsparciu lokalnych
            firm i uczelni, nasze projekty mają realny wpływ na rozwój
            technologii w regionie zielonogórskim.
          </Card>
        </div>
      </div>
    </>
  );
}
