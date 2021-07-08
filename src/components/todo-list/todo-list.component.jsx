import React from 'react';
import { connect } from 'react-redux';
import './todo-list.styles.scss';
import TodoItem from '../todo-item/todo-item.component'

function TodoList({ todos, handleChange }) {
  console.log('todo list rendered');

  return (
    <div className="todo-list">
      {
        todos.length ? todos.map(todo =>
          <TodoItem
            todo={todo}
            key={todo.id}
            handleChange={(({ target: { checked } }) =>
              handleChange(todo, checked)
            )} />
        ) :
          (<p>No todos added here</p>)
      }
    </div>
  )
}

// a callback function
// it should map redux state to props for the current component
const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps)(React.memo(TodoList)); // return a memoized version of the functional component TodoList