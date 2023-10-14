import { Descriptions } from 'antd';
import { object } from 'prop-types';
import { useSelector } from "react-redux";
import SidebarSlider from '../sidebar-slider/SidebarSlider';

import styles from './Branches.module.scss';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';

const getItems = (branch) => {
    const items = [{
        key: 1,
        label: 'Адрес',
        children: branch['address']
    }]

    return items;
}

const Branch = ({ branch, onClick }) => {
    const items = getItems(branch);

    return (
        <div onClick={onClick} className={styles.branch__card}>
            <ReactSVG className={styles.icon} src='../../src/assets/icon-branch.svg'/>
            <div className={styles.description}>
                <h3 className={styles.title}>{branch.name}</h3>
                <span>{branch.address}</span>
                <span className={styles.span__radius}>В радиусе 3 км</span>
            </div>
        </div>
    )
}

const Branches = () => {
    const [ showSlider, setShowSlider ] = useState(false);
    const branches = useSelector(store => store.state.branches);

    const onClick = () => {
        setShowSlider(true);
    }

    const hideSlider = () => {
        setShowSlider(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.branches__cards}>
                {
                    branches.length ? branches.map((branch, id) => (
                        <Branch key={id} branch={branch} onClick={onClick}/>
                    )) : <></>
                }
            </div>
            {
                showSlider && <SidebarSlider hideSlider={hideSlider}/>
            }
        </div>
    )
}

export default Branches;