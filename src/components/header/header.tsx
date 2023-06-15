import styles from './header.module.css';
import EizMatrix from '../../assets/eisenhower-matrix.jpg';

const Header = () => {
  return (
    <div className={styles.container}>
      <img src={EizMatrix} alt="Eisenhower matrix" className={styles.image} />
      <a href="https://goal-life.com/page/method/matrix-eisenhower" className={styles.info}>
        Want more details?
      </a>
    </div>
  );
};

export default Header;
