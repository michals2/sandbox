// common imports
import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";

// JSX
// use quotes to specify string literals as attributes
const element = <div tabIndex="0" />;
// use curly braces to embed JS expression as attribute
const element = <img src={user.avatarUrl} />;
// if tag is empty, can close immediately --> />
const element = <img src={user.avatarUrl} />;
// JSX tags may contain children
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
// Babel compiles JSX --> React.createElement() calls
const element = <h1 className="greeting">Hello, world!</h1>;
// compiles to
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
// React.createElement() creates an object ("React element") that looks like
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world"
  }
};

/**
 * JSX --> React.createElement() --> React element --> ReactDOM --> browser DOM element
 * React components are made up of React elements
*/

// Rendering an element to the DOM (method 1)
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

// Functional component
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  );
}
// Class component
class Welcome extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.name}
      </h1>
    );
  }
}

// React elements can represent user-defined components
const element = <Welcome name="Sara" />;
// When React sees an element representing a user-defined component,
// it passes JSX attributes to this component as a single object (props)
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}
    </h1>
  );
}
const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
// 1. We call ReactDOM.render() with the <Welcome name="Sara" /> element.
// 2. React calls the Welcome component with {name: 'Sara'} as the props.
// 3. Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// 4. React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

// Always start component names with a capital letter (to differentiate from browser DOM elements)

// Props are read-only --> All React components must act like pure functions with respect to their props

/**
 * State is similar to props, but it is private and fully controlled by the component.
 * 
 * We mentioned before that components defined as classes have some additional features.
 * Local state is exactly that: a feature available only to classes.
*/

// creating a stateful componet
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));

/**
 * Lifecycle methods
 * http://imgh.us/react-lifecycle.svg
 * 
 * "Lifecycle Hooks"
 * componentDidMount()
 * componentWillUnmount()
*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          It is {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"));
/**
 * 1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor
 * of the Clock component. Since Clock needs to display the current time,
 * it initializes this.state with an object including the current time.
 * We will later update this state.
 * 
 * 2) React then calls the Clock component's render() method. This is how React
 * learns what should be displayed on the screen. React then updates the DOM to
 * match the Clock's render output.
 * 
 * 3) When the Clock output is inserted in the DOM, React calls the
 * componentDidMount() lifecycle hook. Inside it, the Clock component asks the
 * browser to set up a timer to call tick() once a second.
 * 
 * 4) Every second the browser calls the tick() method. Inside it, the Clock
 * component schedules a UI update by calling setState() with an object containing
 * the current time. Thanks to the setState() call, React knows the state has
 * changed, and calls render() method again to learn what should be on the screen.
 * This time, this.state.date in the render() method will be different, and so the
 * render output will include the updated time. React updates the DOM accordingly.
 * 
 * 5) If the Clock component is ever removed from the DOM, React calls the
 * componentWillUnmount() lifecycle hook so the timer is stopped.
*/

// Things to know about setState()

// 1. Do Not Modify State Directly
// Use this.setState with a new object instead
// The only place where you can assign this.state is the constructor.
// Wrong
this.state.comment = "Hello";
// Correct
this.setState({ comment: "Hello" });

// 2. State Updates May Be Asynchronous
// this.props and this.state may not by synchronized
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment
});
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
// 3. State Updates are Merged
class temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
}

// Top-down data flow

// event handling
// in vanilla HTML
<button onclick="activateLasers()">Activate Lasers</button>;
// in React
const element = (
  <div>
    <button onClick={activateLasers}>Activate Lasers</button>
  </div>
);

// preventing default behavior (HTML)
const element = (
  <a href="#" onclick="console.log('The link was clicked.'); return false">
    Click me
  </a>
);
// preventing default behavior in REACT
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
// e --> synthetic event

// this and binding
// Generally, if you refer to a method without () after it, such as
// onClick={this.handleClick}, you should bind that method.
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));

// inline if with logical && operator
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>}
    </div>
  );
}
const messages = ["React", "Re: React", "Re:Re: React"];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById("root")
);
// It works because in JavaScript, true && expression always evaluates to
// expression, and false && expression always evaluates to false.
// Therefore, if the condition is true, the element right after && will
// appear in the output.If it is false, React will ignore and skip it.

// inline if-else with conditional operator
const render = () => {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
    </div>
  );
};

// To prevent component from rendering (even if rendered by another component), return null
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));

// Lists and keys
// Rendering multiple components
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);

// Keys
// -Keys help React identify which items have changed, are added,
// or are removed. Keys should be given to the elements inside
// the array to give the elements a stable identity
// -Keys should be unique amongst siblings but don't need to be globally unique
// -Keys are used by React but don't get passed to components

// Choosing keys
// 1. Use a string that uniquely identifies a list item amongst siblings --> IDs from data
// 2. Use item index (WARNING --> Use of indices as keys not recommended id items can reorder)

// Rule of thumb --> elements inside the map() call need keys.

// With the example above, the Post component can read props.id, but not props.key
const content = posts.map(post =>
  <Post key={post.id} id={post.id} title={post.title} />
);

// Can embed map() into JSX expressions
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(number =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}

// Controlled components
// An input form element whose value is controlled by React is called a "controlled component".
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// See https://facebook.github.io/react/docs/forms.html#controlled-components for specific form elemets

// use the special 'children' prop to pass children elements directly to their output
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

// State is reserved only for interactivity, that is, data
// that changes over time. Since this is a static version
// of the app, you don't need it.

// Is it state?
// 1. Is it passed in from a parent via props? If so, it probably isn't state.
// 2. Does it remain unchanged over time? If so, it probably isn't state.
// 3. Can you compute it based on any other state or props in your component? If so, it isn't state.

// Where should each piece of state live in an application?
// 1. Identify every component that renders something based on that state.
// 2. Find a common owner component (a single component above all the components that need the state in the hierarchy).
// 3. Either the common owner or another component higher up in the hierarchy should own the state.
// 4. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

// Handy shortcuts
<div>
  {/* type 'div.Luke' and hit tab. result shown below */}
  <div className="Luke" />
</div>;

// object desctucturing
function render() {
  let { children } = this.props,
    { loaded } = this.state;
  return (
    <div>
      {loaded && children}
    </div>
  );
}
