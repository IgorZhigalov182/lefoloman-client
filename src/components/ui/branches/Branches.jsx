import { Descriptions } from 'antd';
import { object } from 'prop-types';
import { useSelector } from "react-redux";

import styles from './Branches.module.scss';

const getItems = (branch) => {
    let i = 0;
    const items = ['address',
                    'rating',
                    'metro_station',
                    'phone_number'].map(it => {
        if (Object.keys(branch).includes(it)) {
            i++;
            return {
                key: i,
                label: it,
                children: branch[it]
            }
        }
    });

    return items;
}

const Branch = ({ branch }) => {
    const items = getItems(branch);

    return (
        <div>
            <h2>{branch.name}</h2>
            <span>{branch.address}</span>
        </div>
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