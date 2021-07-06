import { render, screen, fireEvent } from '@testing-library/react';

import TodoForm from './todo-form.component';

describe('todo-form test suite', () => {
  test('it renders the component in the right initial state', () => {
    render(<TodoForm />);

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('it enables/disables button appropriately', () => {
    render(<TodoForm/>);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Todo 1'}
    });
    expect(screen.getByRole('button')).toBeEnabled();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: ''}
    });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('it adds the new todo', () => {
    let todoText;
    const newTodo = (newTodo) => {
      todoText = newTodo;
    };

    render(<TodoForm onNewTodo={newTodo}/>);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Todo 1'}
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
    expect(todoText).toBe('Todo 1');
  });
});