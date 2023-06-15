import styles from './addItem.module.css';
import mainStyles from '../mainStyles/mainStyles.module.css';
import { useToDoContext } from '../context';
import useInput from '../hooks/useInput';

const AddItem = () => {
  const { state, setState } = useToDoContext();
  const { state: task, handleChange, setState: setTask } = useInput<string>('');

  const createTask = () => {
    const newTodoList = [...state.toDoList, task];
    setState({ ...state, toDoList: newTodoList });
    setTask('');
  };

  return (
    <div className={styles.container}>
      <span className={mainStyles.title}>Add Item</span>
      <div className={styles.wrapper}>
        <input className={mainStyles.input} type="text" value={task} onChange={handleChange} />
        <button className={mainStyles.button} onClick={createTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddItem;
