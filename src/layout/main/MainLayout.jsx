import { useState } from 'react';
import { UserOutlined, UpCircleFilled, CloudFilled, SyncOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Map from '../../components/ui/map/Map';
import Header from '../../components/ui/header/Header';
import { useTheme } from '../../hooks/useTheme';
import usePosition from '../../hooks/usePosition';
import './MainLayout.scss';
import Sidebar from '../../components/ui/sidebar/Sidebar';
import { useSelector } from 'react-redux';
import Branches from '../../components/ui/branches/Branches';
import Footbar from '../../components/ui/footbar/Footbar';

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme: colorTheme, setTheme } = useTheme();
  const { position, error } = usePosition();
  const { latitude, longitude, accuracy } = position;

  const { navTab } = useSelector((store) => ({
    navTab: store.state.navTab,
  }));

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const handleSwitchMenu = ({ key }) => {
  //   if (key === '4') {
  //     colorTheme === 'light' ? setTheme('dark') : setTheme('light');
  //   }
  // };

  return (
    <Layout theme={colorTheme} style={{ height: '100vh' }}>
      <Header />
      <Layout>
        <Content
          style={{
            margin: '1px 1px',
            minHeight: 280,
            background: colorBgContainer,
            position: 'relative',
            zIndex: 1,
          }}>
          <Sidebar>{navTab === 'branches' && <Branches />}</Sidebar>
          <Footbar />
          <Map />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
