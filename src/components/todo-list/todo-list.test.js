import { render, screen, fireEvent } from '@testing-library/react';

import TodoList from './todo-list.component';

describe('todo-list test suite', () => {
  test('it renders the component in the right initial state', () => {
    const todos = [
      {
        id: 1,
        title: 'Todo 1',
        createdDate: new Date(2021, 4, 3),
      },
      {
        id: 2,
        title: 'Todo 2',
        createdDate: new Date(2021, 4, 10),
      }
    ];
    render(<TodoList todos={todos} />);

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();

    expect(screen.getByText('(03-05-2021)')).toBeInTheDocument();
    expect(screen.getByText('(10-05-2021)')).toBeInTheDocument();
  });

  test('it renders the component with the no resultsbanner', () => {
    const todos = [];
    render(<TodoList todos={todos} />);
    expect(screen.getByText('No todos added yet!')).toBeInTheDocument();
  });
});