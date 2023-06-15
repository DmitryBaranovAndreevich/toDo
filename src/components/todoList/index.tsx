import styles from './todoList.module.css';
import mainStyles from '../mainStyles/mainStyles.module.css';
import Item from '../item';
import { FC, FormEvent } from 'react';

interface ITodoList {
  title: string;
  items: string[];
  isFinish?: boolean;
}

const TodoList: FC<ITodoList> = ({ title, items, isFinish = false }) => {
  return (
    <div>
      <h3 className={mainStyles.title}>{title}</h3>
      {items.map((el) => (
        <Item taskText={el} isComplete={isFinish} key={el} />
      ))}
    </div>
  );
};

export default TodoList;
