import Item from '../item';
import { FC } from 'react';
import Title from '../title';

interface ITodoList {
  title: string;
  items: string[];
  isFinish?: boolean;
}

const TodoList: FC<ITodoList> = ({ title, items, isFinish = false }) => {
  return (
    <div>
      <Title>{title}</Title>
      {items.map((el) => (
        <Item taskText={el} isComplete={isFinish} key={el} />
      ))}
    </div>
  );
};

export default TodoList;
