import './Sidebar.scss';
import { Input } from 'antd';
const { Search } = Input;

import './Sidebar.scss';
import { useDispatch } from 'react-redux';

const Sidebar = ({ children }) => {
    const dispatch = useDispatch();
    const onSearch = (value, _e, info) => {
        useDispatch({
            type: SEARCH_BRANCH
        });
    };
    return (
        <div className='desktop'>
            <div className='sidebar__search'>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
            {children}
        </div>
    )
}

export default Sidebar;