import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;

import './Sidebar.scss';

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => {
    dispatch({
      type: SEARCH_BRANCH,
    });
  };

  return (
    <div className="desktop">
      <div className="sidebar__search">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
