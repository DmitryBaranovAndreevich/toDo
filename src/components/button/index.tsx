import { FC, ReactNode } from 'react';
import styles from './button.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  addClass?: string;
}

const Button: FC<IButton> = ({ children, addClass, ...props }) => {
  return (
    <button className={styles.button + ' ' + addClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
