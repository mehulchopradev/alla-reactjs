import { render, screen, fireEvent } from '@testing-library/react';

import TodoItem from './todo-item.component';

describe('todo-item test suite', () => {
  test('it renders the component in the right initial state', () => {
    const todo = {
      title: 'Todo 1',
      createdDate: new Date(2021, 4, 3),
    }
    render(<TodoItem todo={todo} />);

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('(03-05-2021)')).toBeInTheDocument();
  });

  test('it renders the component in the right initial state for the title field', () => {
    const todo = {
      title: 'toDO 2',
      createdDate: new Date(2021, 4, 3),
    }
    render(<TodoItem todo={todo} />);

    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });

  test('it sends out the handleChange signal to its parent', () => {
    const todo = {
      title: 'toDO 2',
      createdDate: new Date(2021, 4, 3),
    };

    let handleChangeCalled;
    const handleChange = (event) => {
      handleChangeCalled = true;
    }

    render(<TodoItem todo={todo} handleChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChangeCalled).toBeTruthy();
  });
});