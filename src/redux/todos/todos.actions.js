export const addTodo = (newTodoTitle) => ({
  type: 'ADD_TODO',
  payload: newTodoTitle
})

export const removeTodos = (todosToRemove) => ({
  type: 'REMOVE_TODOS',
  payload: todosToRemove
})