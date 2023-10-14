import { useState } from 'react';
import Drawer from '../drawer/Drawer';
import styles from './Footbar.module.scss';
import { Button, Space } from 'antd';
import { BankOutlined, HistoryOutlined, MonitorOutlined } from '@ant-design/icons';

const Footbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');

  const toggleDrawer = (e) => {
    setType(e);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Space wrap>
        <Drawer type={type} isOpen={isOpen} toggleDrawer={toggleDrawer} />
        {!isOpen && (
          <>
            <Button onClick={() => toggleDrawer('1')} type="primary">
              <HistoryOutlined />
            </Button>
            <Button onClick={() => toggleDrawer('2')} type="primary">
              <BankOutlined />
            </Button>
            <Button onClick={() => toggleDrawer('3')} type="primary">
              <MonitorOutlined />
            </Button>
          </>
        )}
      </Space>
    </div>
  );
};

export default Footbar;
