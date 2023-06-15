import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { IInitValue } from './types/IInitvalue';
import { TContext } from './types/TContext';
import { IContext } from './types/IContext';

export const initValue: IInitValue = {
  toDoList: ['Go Shopping'],
  comletedList: ['Go to the cinema'],
};

export const TodoContext = createContext<TContext | null>(null);

export const useToDoContext = () => useContext(TodoContext) as TContext;

const Context: FC<IContext> = ({ children }) => {
  const [state, setState] = useState<IInitValue>(initValue);

  return <TodoContext.Provider value={{ state, setState }}>{children}</TodoContext.Provider>;
};

export default Context;
