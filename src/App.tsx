import { ConfigProvider, Layout, theme } from 'antd';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';

export function App() {
  const {
    Header: AntDHeader,
    Content: AntDContent,
    Footer: AntDFooter
  } = Layout;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgLayout: '#DFF0FF',
          colorPrimary: '#FF8E2B',
          colorHighlight: '#2E77AE',  //blue
          colorTextSecondary: '#E0EAF5', //baby blue
          colorTextTertiary: '#0D2137', //navy
          colorTextQuaternary: '#EEEEE0',
          colorLinkHover: '#FF8E2B' //orange
        },
        algorithm: theme.darkAlgorithm
      }}>
      <div className="h-full w-full m-0 p-0">
        <Layout>
          <AntDHeader
            style={{ height: 'auto', position: 'sticky', top: 0, zIndex: 20 }}>
            <Header />
          </AntDHeader>
          <AntDContent>
            <LandingPage />
          </AntDContent>
          <AntDFooter style={{ paddingInline: 0, paddingBlock: 0 }}>
            <Footer />
          </AntDFooter>
        </Layout>
      </div>
    </ConfigProvider>
  );
}
