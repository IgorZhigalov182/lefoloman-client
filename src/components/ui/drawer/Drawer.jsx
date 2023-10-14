import React, { useRef, useState } from 'react';
import Branches from '../branches/Branches';
import styles from './Drawer.module.scss';
import RouteHistory from '../route-history/RouteHistory';
import Sidebar from '../sidebar/Sidebar';

const Drawer = ({ isOpen, toggleDrawer, type, children }) => {
  const [height, setHeight] = useState('40%');
  const [dragging, setDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const drawerRef = useRef(null);
  //   const handleTouchStart = (e) => {
  //     const touchObject = e.touches[0];
  //     setInitialY(touchObject.clientY);
  //     setDragging(true);
  //   };

  //   const handleTouchMove = (e) => {
  //     if (dragging) {
  //       const touchObject = e.touches[0];
  //       const deltaY = touchObject.clientY - initialY;
  //       setHeight(`${(deltaY / window.innerHeight) * 100}%`);
  //     }
  //   };

  //   function handleResize(e) {
  //     const newHeight = `${100 - (e.clientY / window.innerHeight) * 100}%`;
  //     setHeight(newHeight);
  //   }

  //   const handleTouchEnd = () => {
  //     setDragging(false);
  //   };
  // console.log(type);
  // if (isOpen) {
  //   document.getElementById('sidebar').classList.remove('hidden');
  // }

  return (
    // <>
    //   {children}
    //   {isOpen && (
    //     <div className={styles.drawer_container} ref={drawerRef}>
    //       {type === '1' && <RouteHistory />}
    //       {type === '2' && <Branches />}
    //       <span onClick={toggleDrawer} className={styles.close_two}>
    //         ✖
    //       </span>
    //     </div>
    //   )}
    // </>
    <Sidebar>
      {type === '1' && <RouteHistory />}
      {type === '2' && <Branches />}
      {type === '3' && <Branches/>}
    </Sidebar>
  );
};

export default Drawer;
