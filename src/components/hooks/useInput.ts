import { FormEvent, useState } from 'react';

const useInput = <T>(value: T) => {
  const [state, setState] = useState<T>(value);

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState(input.value as T);
  };

  return { state, handleChange, setState };
};

export default useInput;
