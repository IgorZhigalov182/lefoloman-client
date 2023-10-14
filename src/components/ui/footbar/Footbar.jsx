import { useState } from 'react';
import Drawer from '../drawer/Drawer';
import styles from './Footbar.module.scss';
import { Button, Space } from 'antd';
import { BankOutlined, HistoryOutlined, MonitorOutlined } from '@ant-design/icons';

const Footbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className={styles.wrapper}>
      <Space wrap>
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
        <Button type="primary">
          <HistoryOutlined />
        </Button>
        <Button onClick={toggleDrawer} type="primary">
          <BankOutlined />
        </Button>
        <Button type="primary">
          <MonitorOutlined />
        </Button>
      </Space>
    </div>
  );
};

export default Footbar;
