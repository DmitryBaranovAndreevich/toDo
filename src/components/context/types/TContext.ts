import { IInitValue } from './IInitvalue';

export type TContext = {
  state: IInitValue;
  setState: (newTheme: IInitValue) => void;
};
