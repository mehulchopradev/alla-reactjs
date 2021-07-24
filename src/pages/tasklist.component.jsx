import { useState, useContext } from 'react';
// import { connect } from 'react-redux';
import TodoList from '../components/todo-list/todo-list.component';
import TodoForm from '../components/todo-form/todo-form.component';

// import { removeTodos } from '../redux/todos/todos.actions';
import TodosContext from '../contexts/todos.context';

function TaskList({ /* removeCompletedTodos */ }) {
  const existingTodos = useContext(TodosContext);

  const [todos, setTodos] = useState(existingTodos);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleChange = (todo, checked) => {
    if (checked) {
      setCheckedTodos(checkedTodos.concat([todo]))
    } else {
      setCheckedTodos(checkedTodos.filter(existingTodo => existingTodo !== todo))
    }
  };

  const removeTodos = () => {
    // removeCompletedTodos(checkedTodos);
    setTodos(todos.filter(item => checkedTodos.indexOf(item) === -1)); // render
    setCheckedTodos([]);
  };

  const onNewTodo = (newTodo) => {
    const todo = {
      id: todos.length + 1,
      title: newTodo,
      createdDate: new Date(),
    };

    setTodos(todos.concat([todo])); // render
  };

  return (
    <div>
      <TodoForm onNewTodo={onNewTodo} />
      <TodosContext.Provider value={todos}>
        <TodoList handleChange={handleChange} />
      </TodosContext.Provider>
      <button disabled={!checkedTodos.length} onClick={removeTodos}>Clear completed todos</button>({checkedTodos.length})
    </div>
  )
}

/* const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
  calc: state.calcReducer.calcData
}); */

/* const mapDispatchToProps = (dispatch) => ({
  removeCompletedTodos: (todosToRemove) => dispatch(removeTodos(todosToRemove))
}) */

// export default connect(null, mapDispatchToProps)(TaskList);
export default TaskList;