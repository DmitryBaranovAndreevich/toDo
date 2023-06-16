import { FC, ReactNode } from 'react';
import styles from './title.module.css';

interface ITitle {
  children: ReactNode;
}

const Title: FC<ITitle> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default Title;
