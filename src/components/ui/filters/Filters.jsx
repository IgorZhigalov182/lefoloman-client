import { Button, Switch } from 'antd';
import styles from './Filters.module.scss';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';
import { CHANGE_FILTER, getFilteredBranches } from '../../../services/actions';

const Filters = () => {
    const dispatch = useDispatch();
    const filters = store => store.state.currentFilters;

    const onPress = (id) => {
        dispatch({
            type: CHANGE_FILTER,
            field: id
        });
    };

    const onClick = (e) => {
        dispatch(getFilteredBranches(filters));
    };

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <ReactSVG src='../../src/assets/icon-handicaped.svg'/>
                    <span>Доступно для маломобильных групп</span>
                    <Switch defaultChecked={false} onClick={() => onPress('has_ramp')}/>
                </div>
                <div className={styles.filter}>
                    <ReactSVG src='../../src/assets/icon-vip.svg'/>
                    <span>Премиальное обслуживание</span>
                    <Switch defaultChecked={false} onClick={() => onPress('has_ramp')} />
                </div>
                <div className={styles.filter}>
                    <span>Работают по выходным</span>
                    <Switch defaultChecked={false} onClick={() => onPress('has_ramp')} />
                </div>
                <div className={styles.filter}>
                    <span>Обслуживание юридических лиц</span>
                    <Switch defaultChecked={false} onClick={() => onPress('openHours')} />
                </div>
                <div className={styles.filter}>
                    <span>Обслуживание физический лиц</span>
                    <Switch defaultChecked={false} onClick={() => onPress('openHoursIndividual')} />
                </div>
            </div>

            <Button onClick={onClick} type='primary'>Применить</Button>
        </div>
    )
}

export default Filters;