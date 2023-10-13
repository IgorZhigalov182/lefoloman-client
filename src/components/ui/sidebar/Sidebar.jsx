import './Sidebar.scss';

const Sidebar = ({ children }) => {
    return (
        <div className='desktop'>
            {children}
        </div>
    )
}

export default Sidebar;