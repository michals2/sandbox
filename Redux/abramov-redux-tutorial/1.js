const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const { createStore } = Redux;
// ES6 object deconstruciton
// same as --> var createStore = Redux.createStore;
// same as --> import { createStore } from 'redux;

const store = createStore(counter);
// specify the reducer (counter)

const render = () => {
  ReactDOM.render(<Counter />, document.getElementById("root"));
};

// subscribe --> register a callback that Redux will call every time an action has been dispatched
store.subscribe(render);
render();
