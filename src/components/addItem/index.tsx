import styles from './addItem.module.css';

const AddItem = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Add Item</span>
      <div className={styles.wrapper}>
        <input className={styles.input} type="text" />
        <button className={styles.button}>Add</button>
      </div>
    </div>
  );
};

export default AddItem;
