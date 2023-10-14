import { useEffect, useState } from 'react';
import { UserOutlined, UpCircleFilled, CloudFilled, SyncOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Map from '../../components/ui/map/Map';
import Header from '../../components/ui/header/Header';
import { useTheme } from '../../hooks/useTheme';
import usePosition from '../../hooks/usePosition';
import './MainLayout.scss';
import Sidebar from '../../components/ui/sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Branches from '../../components/ui/branches/Branches';
import Footbar from '../../components/ui/footbar/Footbar';
import RouteHistory from '../../components/ui/route-history/RouteHistory';
import { CHANGE_SIDEBAR_TYPE } from '../../services/actions';

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme: colorTheme, setTheme } = useTheme();
  const { position, error } = usePosition();
  const { latitude, longitude, accuracy } = position;
  const [coordinates, setCoordinates] = useState(null);

  const { navTab, footer, sidebarType } = useSelector((store) => ({
    navTab: store.state.navTab,
    footer: store.state.footer,
    sidebarType: store.state.sidebarType
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
          {
            (!sidebarType && !footer) && 
              <Sidebar><Branches /></Sidebar>
          }
          {
            ['1', '2', '3'].includes(sidebarType) && 
            <Sidebar>
              {sidebarType === '1' && <RouteHistory />}
              {sidebarType === '2' && <Branches />}
              {sidebarType === '3' && <Branches/>}
            </Sidebar>
          }
          <Footbar />
          <Map coords={coordinates} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
