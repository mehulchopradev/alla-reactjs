import './todo-list.styles.scss';

import TodoItem from '../todo-item/todo-item.component';

/**
 * 
 * @param {object} props
 * todos: [
 *  { id: 1, title: 'todo 1', createdDate: Date },
 *  { id: 2, title: 'todo 2', createdDate: Date },
 *  { id: 3, title: 'todo 4', createdDate: Date }
 * ] 
 */
function TodoList({ todos }) {
  return (
    <div className='todo-list'>
      {
        todos.length ? todos.map(todo => <TodoItem key={todo.id} todo={todo}/>) : (<p>No todos added yet!</p>)
      }
    </div>
  )
}

export default TodoList;