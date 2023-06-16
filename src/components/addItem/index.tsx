import styles from './addItem.module.css';
import { useToDoContext } from '../context';
import useInput from '../hooks/useInput';
import Button from '../button';
import Input from '../input';
import Title from '../title';

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
      <Title>Add Item</Title>
      <div className={styles.wrapper}>
        <Input type="text" value={task} onChange={handleChange} />
        <Button onClick={createTask} type={'button'}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddItem;
