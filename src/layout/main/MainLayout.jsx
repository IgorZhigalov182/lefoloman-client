import { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  UpCircleFilled,
  CloudFilled,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Map from '../../components/ui/map/Map';

const { Header, Sider, Content } = Layout;

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
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={menuItems} />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '1px 1px',
            minHeight: 280,
            background: colorBgContainer,
          }}>
          <Map />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
