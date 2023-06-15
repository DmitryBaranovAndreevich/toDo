import React from 'react';
import styles from './app.module.css';
import Header from '../header';
import AddItem from '../addItem';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <AddItem />
      </div>
    </div>
  );
}

export default App;
