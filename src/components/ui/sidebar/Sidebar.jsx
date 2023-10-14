import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;
import './Sidebar.scss';
import { ReactSVG } from 'react-svg';
import SidebarSlider from '../sidebar-slider/SidebarSlider';
import Filters from '../filters/Filters';
import { CHANGE_SIDEBAR_TYPE, TOGGLE_FOOTER } from '../../../services/actions';

const Sidebar = ({ children }) => {
  const footer = (store) => store.state.footer;
  const [showSlider, setShowSlider] = useState(false);

  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => {
    dispatch({
      type: SEARCH_BRANCH,
    });
  };

  const onClick = () => {
    setShowSlider(true);
  };

  const onClose = () => {
    setShowSlider(false);
  };

  const onSidebarClose = () => {
    dispatch({
      type: CHANGE_SIDEBAR_TYPE,
      sideBar: null,
    });
  };

  return (
    <div id="sidebar" className="desktop hidden">
      <div className="container">
        <div className="sidebar__search">
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
          <div onClick={onClick}>
            <ReactSVG src="../../src/assets/icon-filter.svg" />
          </div>
          <div className="sidebar-close-icon" onClick={onSidebarClose}>
            <ReactSVG src="../../src/assets/icon-close.svg" />
          </div>
        </div>
        {children}
      </div>
      {showSlider && (
        <SidebarSlider onClose={onClose}>
          <Filters />
        </SidebarSlider>
      )}
    </div>
  );
};

export default Sidebar;
