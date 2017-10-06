const l = console.log;

// todo reducer (for updating a single todo)
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

// todo list reducer (for updating the whole todo list)
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(state, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

// visibility filter reducer
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  };
};

const { createStore } = Redux;
const store = createStore(todoApp);

function printState() {
  l("Current state:");
  l(store.getState());
  l("----------");
}

printState();

l("Dispatching ADD_TODO");
store.dispatch({
  type: "ADD_TODO",
  id: 0,
  text: "learn redux"
});

printState();

l("Dispatching TOGGLE_TODO");
store.dispatch({
  type: "TOGGLE_TODO",
  id: 0
});

printState();

l("Dispatching SET_VISIBILITY_FILTER");
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED"
});

printState();
