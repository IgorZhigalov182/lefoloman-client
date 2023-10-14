import { ReactSVG } from 'react-svg';
import styles from './BranchDescription.module.scss';

const BranchDescription = ({ branch }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>
                <ReactSVG className={styles.icon} src='../../src/assets/icon-branch.svg'/>
                {branch.name}
            </h2>
            <span className={styles.address}>{branch.address}</span>
            <h4 className={styles.h4}>Обслуживание</h4>
            <ul>
                <li>Физические лица</li>
                <li>Юридические лицы</li>
                <li>Премиальное обслуживание</li>
            </ul>
            <h4 className={styles.h4}>Режим работы отделения</h4>
            <span>пн-пт: 10:00-20:00 сб: 10:00-17:00 вс: выходной</span>
        </div>
    )
}

export default BranchDescription;