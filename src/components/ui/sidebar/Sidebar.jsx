import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;

import './Sidebar.scss';
import { ReactSVG } from 'react-svg';
import SidebarSlider from '../sidebar-slider/SidebarSlider';
import Filters from '../filters/Filters';

const Sidebar = ({ children }) => {
    const [showSlider, setShowSlider] = useState(false);
    
    const dispatch = useDispatch();
    const onSearch = (value, _e, info) => {
        dispatch({
            type: SEARCH_BRANCH
        });
    };

    const onClick = () => {
        setShowSlider(true);
    }

    const onClose = () => {
        setShowSlider(false);
    }

    return (
        <div className='desktop'>
            <div className='container'>
                <div className='sidebar__search'>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    <div onClick={onClick}>
                        <ReactSVG src='../../src/assets/icon-filter.svg'/>
                    </div>
                </div>
                {children}
            </div>
            {
                showSlider &&
                    <SidebarSlider onClose={onClose}>
                        <Filters/>
                    </SidebarSlider>
            }
        </div>
    )
}

export default Sidebar;