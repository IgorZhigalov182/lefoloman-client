import { ReactSVG } from 'react-svg';
import { Layout } from 'antd';
import Navbar from '../navbar/Navbar';
import './Header.scss';

const { Header } = Layout;

const headerStyle = {
  display: 'flex',
  justifyItems: 'center',
  textAlign: 'center',
  color: '#fff',
  height: 60,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  gap: '30px',
};

const NavContent = () => {
  return (
    <Header style={headerStyle}>
      <ReactSVG className="icon" src="./src/assets/vtb-icon.svg" />
      <Navbar />
    </Header>
  );
};

export default NavContent;
