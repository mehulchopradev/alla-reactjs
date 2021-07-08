const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      title: 'Todo 1',
      createdDate: new Date(),
    },
    {
      id: 2,
      title: 'Todo 2',
      createdDate: new Date(),
    }
  ],
}

// action: type and payload
const todosReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    default: return currentState;
  }
};

export default todosReducer;