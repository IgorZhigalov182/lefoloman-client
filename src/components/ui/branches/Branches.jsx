import { Descriptions } from 'antd';
import { object } from 'prop-types';
import { useSelector } from "react-redux";

import styles from './Branches.module.scss';
import { ReactSVG } from 'react-svg';

const getItems = (branch) => {
    const items = [{
        key: 1,
        label: 'Адрес',
        children: branch['address']
    }]

    return items;
}

const Branch = ({ branch }) => {
    const items = getItems(branch);

    return (
        <a className={styles.branch__card}>
            <ReactSVG className={styles.icon} src='../../src/assets/icon-branch.svg'/>
            <div className={styles.description}>
                <h3>{branch.name}</h3>
                <span>{branch.address}</span>
                <span className={styles.span__radius}>В радиусе 3 км</span>
            </div>
        </a>
    )
}

const Branches = () => {
    const branches = useSelector(store => store.state.branches);

    return (
        <div className={styles.container}>
            <div className={styles.branches__cards}>
                {
                    branches.length ? branches.map((branch, id) => (
                        <Branch key={id} branch={branch}/>
                    )) : <></>
                }
            </div>
        </div>
    )
}

export default Branches;