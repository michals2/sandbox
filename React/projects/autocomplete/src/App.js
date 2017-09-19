import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  componentDidMount() {
    console.log("mounted");
    const url = "http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes";
    fetch(url)
      .then(response => response.text())
      .then(text => text.slice(2, text.length - 2))
      .then(slicedText => JSON.parse(slicedText))
      .then(cars => this.setState({ cars }))
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <form>
        <label>
          Car:
          <input type="text" name="carText" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
