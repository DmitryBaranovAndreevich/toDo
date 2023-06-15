import React from 'react';
import styles from './app.module.css';
import Header from '../header';
import AddItem from '../addItem';
import TodoList from '../todoList';
import { useToDoContext } from '../context';

function App() {
  const { state } = useToDoContext();
  const { toDoList, comletedList } = state;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <AddItem />
        <TodoList title={'Todo'} items={toDoList} />
        <TodoList title={'Completed'} items={comletedList} isFinish={true} />
      </div>
    </div>
  );
}

export default App;
