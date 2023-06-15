import styles from './item.module.css';
import mainStyles from '../mainStyles/mainStyles.module.css';
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg';
import { FC, useState } from 'react';
import { useToDoContext } from '../context';
import useInput from '../hooks/useInput';

export interface IItem {
  taskText: string;
  isComplete?: boolean;
}

const Item: FC<IItem> = ({ taskText, isComplete = false }) => {
  const { state, setState } = useToDoContext();
  const { state: task, handleChange: setTask } = useInput<string>(taskText);
  const [isEdit, setIsEdit] = useState(false);
  const { state: checked, handleChange: setChecked } = useInput<boolean>(isComplete);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onCheckBoxClick = () => {
    if (!checked) {
      const newTodoList = [...state.toDoList].filter((el) => el !== taskText);
      const newCompletedList = [taskText, ...state.comletedList];
      setState({ ...state, toDoList: newTodoList, comletedList: newCompletedList });
    } else {
      const newTodoList = [taskText, ...state.toDoList];
      const newCompletedList = [...state.comletedList].filter((el) => el !== taskText);
      setState({ ...state, toDoList: newTodoList, comletedList: newCompletedList });
    }
  };

  const removeTask = () => {
    if (isComplete) {
      const newCompletedList = [...state.comletedList].filter((el) => el !== taskText);
      setState({ ...state, comletedList: newCompletedList });
    } else {
      const newTodoList = [...state.toDoList].filter((el) => el !== taskText);
      setState({ ...state, toDoList: newTodoList });
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input__checkbox}
        type="checkbox"
        checked={checked}
        onChange={setChecked}
        onClick={onCheckBoxClick}
      />
      {isEdit ? (
        <input className={mainStyles.input} type="text" value={task} onChange={setTask} />
      ) : (
        <label className={styles.label + ' ' + `${isComplete && styles.label_complete}`}>
          {task}
        </label>
      )}
      <button className={mainStyles.button} onClick={toggleEdit}>
        {isEdit ? 'Save' : 'Edit'}
      </button>
      <button className={mainStyles.button + ' ' + styles.removeButton} onClick={removeTask}>
        <RemoveIcon height="2em" />
      </button>
    </div>
  );
};

export default Item;
