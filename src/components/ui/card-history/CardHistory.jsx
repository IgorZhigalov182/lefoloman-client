import styles from './CardHistory.module.scss';
import { Button } from 'antd';

const CardHistory = ({ lat1, lng1, lat2, lng2 }) => {
  return (
    <div className={styles.wrapper}>
      <p>
        {lat1} : {lng1}
      </p>
      <p>
        {lat2} : {lng2}
      </p>
      <Button type="primary">Построить маршрут</Button>
      <br />
    </div>
  );
};

export default CardHistory;
