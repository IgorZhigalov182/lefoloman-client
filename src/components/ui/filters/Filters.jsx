import { Switch } from 'antd';
import styles from './Filters.module.scss';

const Filters = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <span>Доступно для маломобильных групп</span>
                <Switch defaultChecked onChange={onChange} />
            </div>
            <div className={styles.filter}>
                <span>Премиальное обслуживание</span>
                <Switch defaultChecked onChange={onChange} />
            </div>
            <div className={styles.filter}>
                <span>Работают по выходным</span>
                <Switch defaultChecked onChange={onChange} />
            </div>
            <div className={styles.filter}>
                <span>Обслуживание юридических лиц</span>
                <Switch defaultChecked onChange={onChange} />
            </div>
        </div>
    )
}

export default Filters;