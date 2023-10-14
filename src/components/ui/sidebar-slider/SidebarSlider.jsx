import styles from './SidebarSlider.module.scss';

const SidebarSlider = ({ hideSlider,children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default SidebarSlider;
