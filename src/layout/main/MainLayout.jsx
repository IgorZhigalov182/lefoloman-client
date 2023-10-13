import { useEffect, useState } from 'react';
import { UserOutlined, UpCircleFilled, CloudFilled, SyncOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Map from '../../components/ui/map/Map';
import { useTheme } from '../../hooks/useTheme';
import usePosition from '../../hooks/usePosition';
import './MainLayout.scss';

const { Sider, Content } = Layout;

const menuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Personal area',
  },
  {
    key: '2',
    icon: <UpCircleFilled />,
    label: 'Navigator',
  },
  {
    key: '3',
    icon: <CloudFilled />,
    label: 'Recomendations',
  },
  {
    key: '4',
    icon: <SyncOutlined />,
    label: 'Switch theme',
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme: colorTheme, setTheme } = useTheme();
  const { position, error } = usePosition();
  const { latitude, longitude, accuracy } = position;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSwitchMenu = ({ key }) => {
    if (key === '4') {
      colorTheme === 'light' ? setTheme('dark') : setTheme('light');
    }
  };

  return (
    <Layout theme={colorTheme} style={{ height: '100vh' }}>
      <Sider
        theme={colorTheme}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme={colorTheme}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
          onClick={handleSwitchMenu}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '1px 1px',
            minHeight: 280,
            background: colorBgContainer,
          }}>
          <Map start={[latitude, longitude]} end={[59.5704128, 30.2710784]} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
