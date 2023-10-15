import { useState } from 'react';
import Drawer from '../drawer/Drawer';
import styles from './Footbar.module.scss';
import { Button, Space } from 'antd';
import { BankOutlined, HistoryOutlined, MonitorOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_SIDEBAR_TYPE, TOGGLE_FOOTER } from '../../../services/actions';

const Footbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [type, setType] = useState('');
  const { isOpen, type } = useSelector((store) => ({
    isOpen: store.state.footer,
    type: store.state.sidebarType,
  }));

  const dispatch = useDispatch();

  const toggleDrawer = (e) => {
    //document.getElementById('sidebar').classList.remove('hidden');
    // setType(e);
    // setIsOpen(!isOpen);
    dispatch({
      type: CHANGE_SIDEBAR_TYPE,
      sidebarType: e,
    });
  };

  return (
    <div className={styles.wrapper}>
      <Space wrap>
        {/* {isOpen && <Drawer type={type} isOpen={isOpen} toggleDrawer={toggleDrawer} />} */}
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
      </Space>
    </div>
  );
};

export default Footbar;
