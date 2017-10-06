import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { combineReducers, createStore } from "redux";

// printing helpers
// const l = console.log;
// function printState() {
//   l("Current state:");
//   l(store.getState());
//   l("----------");
// }

// child todo reducer (for updating a single todo)
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

// create combined reducers
const todoApp = combineReducers({
  todos,
  visibilityFilter
});
const store = createStore(todoApp);

let nextTodoId = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: "test",
              id: nextTodoId++
            });
          }}
        >
          Add todo
        </button>
        <ul>
          {this.state.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}


export default App;
