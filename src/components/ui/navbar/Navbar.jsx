import { useState } from 'react';
import { CHANGE_NAV_TAB } from '../../../services/actions';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const items = [
  {
    label: 'Отделения',
    key: 'branches',
    icon: <MailOutlined />,
  },
  {
    label: 'История',
    key: 'history',
    icon: <AppstoreOutlined />,
  },
];

const Navbar = () => {
  const navTab = useSelector((store) => store.state.navTab);
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch({
      type: CHANGE_NAV_TAB,
      navTab: e.key,
    });
  };

  return <Menu onClick={onClick} selectedKeys={[navTab]} mode="horizontal" items={items} />;
};

export default Navbar;
