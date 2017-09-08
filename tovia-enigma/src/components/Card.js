import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  render = () => {
    return <div>this is a test card</div>;
  };
}

export default Card;
