import { FC } from 'react';
import styles from './input.module.css';

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
