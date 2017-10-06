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

const testAddTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    }
  ];

  const action = {
    type: "ADD_TODO",
    id: 1,
    text: "Go shopping"
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: false
    }
  ];
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: false
    }
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go shopping",
      completed: true
    }
  ];
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

// testAddTodo();
testToggleTodo();
console.log("all tests passed");
