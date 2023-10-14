import { useSelector, useDispatch } from 'react-redux';
import SidebarSlider from '../sidebar-slider/SidebarSlider';
import BranchDescription from '../branch-description/BranchDescription';
import styles from './Branches.module.scss';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import { Button } from 'antd';

const getItems = (branch) => {
  const items = [
    {
      key: 1,
      label: 'Адрес',
      children: branch['address'],
    },
  ];

  return items;
};

const Branch = ({ branch, onClick }) => {
  const dispatch = useDispatch();

  const handleDirection = (e, branch) => {
    e.stopPropagation();

    dispatch({
      type: 'SET_DIRECTION',
      payload: {
        lat: branch.latitude,
        lon: branch.longitude,
      },
    });
  };

  const items = getItems(branch);

  return (
    <div onClick={(e) => onClick(e, branch)} className={styles.branch__card}>
      <ReactSVG className={styles.icon} src="../../src/assets/icon-branch.svg" />
      <div className={styles.description}>
        <h3 className={styles.title}>{branch.name}</h3>
        <span>{branch.address}</span>
        <span className={styles.span__radius}>В радиусе 3 км</span>
        <Button onClick={(e) => handleDirection(e, branch)} type="primary">
          Маршрут
        </Button>
      </div>
    </div>
  );
};

const Branches = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentBranch, setCurrentBranch] = useState(null);
  const branches = useSelector((store) => store.state.branches);

  const onClick = (e, branch) => {
    setShowSlider(true);
    setCurrentBranch(branch);
  };

  const onClose = () => {
    setShowSlider(false);
    setCurrentBranch(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.branches__cards}>
        {branches.length ? (
          branches.map((branch, id) => <Branch key={id} branch={branch} onClick={onClick} />)
        ) : (
          <></>
        )}
      </div>
      {showSlider && currentBranch && (
        <SidebarSlider onClose={onClose}>
          <BranchDescription branch={currentBranch} />
        </SidebarSlider>
      )}
    </div>
  );
};

export default Branches;
