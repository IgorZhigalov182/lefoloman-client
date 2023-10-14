import { Button, Switch } from 'antd';
import styles from './Filters.module.scss';
import { ReactSVG } from 'react-svg';

const Filters = () => {
    const onChange = (checked, e) => {
        console.log(e);
    };

    const onClick = () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <ReactSVG src='../../src/assets/icon-handicaped.svg'/>
                    <span>Доступно для маломобильных групп</span>
                    <Switch defaultChecked={false} onChange={onChange} />
                </div>
                <div className={styles.filter}>
                    <ReactSVG src='../../src/assets/icon-vip.svg'/>
                    <span>Премиальное обслуживание</span>
                    <Switch defaultChecked={false} onChange={onChange} />
                </div>
                <div className={styles.filter}>
                    <span>Работают по выходным</span>
                    <Switch defaultChecked={false} onChange={onChange} />
                </div>
                <div className={styles.filter}>
                    <span>Обслуживание юридических лиц</span>
                    <Switch defaultChecked={false} onChange={onChange} />
                </div>
            </div>

            <Button onClick={onClick} type='primary'>Применить</Button>
        </div>
    )
}

export default Filters;