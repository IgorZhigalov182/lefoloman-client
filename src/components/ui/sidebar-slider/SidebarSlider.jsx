import styles from './SidebarSlider.module.scss';
import { ReactSVG } from 'react-svg';

const SidebarSlider = ({ onClose, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <ReactSVG onClick={onClose} src='../../src/assets/icon-close.svg'/>
            </div>
            {children}
        </div>
    )
}

export default SidebarSlider;
