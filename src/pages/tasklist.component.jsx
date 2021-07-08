import { useState } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/todo-list/todo-list.component';
import TodoForm from '../components/todo-form/todo-form.component';

import { removeTodos } from '../redux/todos/todos.actions';

function TaskList({ removeCompletedTodos }) {
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleChange = (todo, checked) => {
    if (checked) {
      setCheckedTodos(checkedTodos.concat([todo]))
    } else {
      setCheckedTodos(checkedTodos.filter(existingTodo => existingTodo !== todo))
    }
  };

  const removeTodos = () => {
    removeCompletedTodos(checkedTodos);
    setCheckedTodos([]);
  };

  return (
    <div>
      <TodoForm />
      <TodoList handleChange={handleChange} />
      <button disabled={!checkedTodos.length} onClick={removeTodos}>Clear completed todos</button>({checkedTodos.length})
    </div>
  )
}

/* const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos
}); */

const mapDispatchToProps = (dispatch) => ({
  removeCompletedTodos: (todosToRemove) => dispatch(removeTodos(todosToRemove))
})

export default connect(null, mapDispatchToProps)(TaskList);