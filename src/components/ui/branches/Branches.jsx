import { useSelector, useDispatch } from 'react-redux';
import SidebarSlider from '../sidebar-slider/SidebarSlider';
import BranchDescription from '../branch-description/BranchDescription';
import styles from './Branches.module.scss';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import { Button } from 'antd';
import { setVisitHistory } from '../../../utils/localStorage';
import { SendOutlined } from '@ant-design/icons';

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

export const Branch = ({ branch, onClick, isHistory }) => {
  const dispatch = useDispatch();

  const showRoute = (e, branch) => {
    e.stopPropagation();

    dispatch({
      type: 'SET_DIRECTION',
      payload: {
        lat: branch.latitude,
        lon: branch.longitude,
      },
    });
  };

  const handleDirection = (e, branch, isHistory) => {
    e.stopPropagation();

    if (!isHistory) {
      setVisitHistory(branch);

      dispatch({
        type: 'SET_HISTORY_BRANCH',
        payload: branch,
      });
    }

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
        <Button
          className={styles.btn}
          onClick={(e) => handleDirection(e, branch, isHistory)}
          type="primary">
          Маршрут
          <SendOutlined />
        </Button>
      </div>
    </div>
  );
};

const Branches = ({ isHistory }) => {
  const [showSlider, setShowSlider] = useState(false);
  const [currentBranch, setCurrentBranch] = useState(null);
  const branches = useSelector((store) => store.state.branches);
  // const historyBranches = useSelector((store) => store.state.historyBranch);
  const historyBranches = JSON.parse(localStorage.getItem('visit_history')) || [];

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
        {isHistory ? (
          historyBranches.length ? (
            historyBranches.map((branch, id) => (
              <Branch key={id} branch={branch} onClick={onClick} isHistory={isHistory} />
            ))
          ) : (
            <h1>История пуста</h1>
          )
        ) : branches.length ? (
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
