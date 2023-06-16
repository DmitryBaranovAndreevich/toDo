import { render, fireEvent, getAllByTestId, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Item from '.';
import Context from '../context';

describe('Тест функциональности task', () => {
  it('Редактирование текста таска работает', async () => {
    const { container } = render(
      <BrowserRouter>
        <Context>
          <Item taskText={'Test'} />
        </Context>
      </BrowserRouter>
    );
    const span = screen.getByText('Test');
    expect(span.textContent).toBe('Test');
    const editButton = screen.getByText('Edit');
    act(() => editButton.click());
    const input = container.querySelector('input[type="text"]') as HTMLInputElement;
    expect(input.value).toBe('Test');
    act(() => (input.value = 'T2'));
    expect(input.value).toBe('T2');
    const saveButton = screen.getByText('Save');
    act(() => saveButton.click());
  });
  it('клик на кнопку удаления активен', () => {
    const { container } = render(
      <BrowserRouter>
        <Context>
          <Item taskText={'Test'} />
        </Context>
      </BrowserRouter>
    );
    const removeButton = container.querySelector('svg')?.closest('button') as HTMLButtonElement;
    const testFunc = jest.fn();
    removeButton.onclick = testFunc;
    act(() => removeButton.click())
    expect(testFunc).toHaveBeenCalled();
  });
  it('клик на чекбокс активен', () => {
    const { container } = render(
      <BrowserRouter>
        <Context>
          <Item taskText={'Test'} />
        </Context>
      </BrowserRouter>
    );
    const input = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const testFunc = jest.fn();
    input.onclick = testFunc;
    act(() => input.click())
    expect(testFunc).toHaveBeenCalled();
  });
});
