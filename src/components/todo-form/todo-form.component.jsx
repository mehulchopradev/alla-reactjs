import { useState } from 'react';

function TodoForm({ onNewTodo }) {
  const [newTodo, setNewTodo] = useState('') // returns an array of size 2. First element -> state variable (newTodo)
  // Second element -> setter function used to set the state (setNewTodo)

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { value } }) => {
    setNewTodo(value); // re-render the current functional component
    setIsDisabled(!value);
  };

  const saveTodo = () => {
    onNewTodo(newTodo);

    setNewTodo('');
    setIsDisabled(true);
  };

  return (
    <div className="todo-form">
      <input type="text" value={newTodo} placeholder="Enter" onChange={handleChange} />
      <button disabled={isDisabled} onClick={saveTodo}>Save</button>
    </div>
  )
}

export default TodoForm;