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
          colorBgLayout: '#121212',
          colorPrimary: '#FF8E2B',
          colorHighlight: '#2E77AE',
          colorTextSecondary: '#E0EAF5',
          colorTextTertiary: '#0D2137',
          colorTextQuaternary: '#EEEEE0',
          colorLinkHover: '#FF8E2B'
        },
        algorithm: theme.darkAlgorithm
      }}>
      <div className="h-screen w-screen m-0 p-0 overflow-x-hidden">
        <Layout>
          <AntDHeader
            style={{ height: 'auto', position: 'sticky', top: 0, zIndex: 20 }}>
            <Header />
          </AntDHeader>
          <AntDContent style={{ minHeight: '100vh' }}>
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
