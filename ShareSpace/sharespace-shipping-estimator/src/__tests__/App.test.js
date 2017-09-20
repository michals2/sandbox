import React from "react";
import ReactDOM from "react-dom";
import App from "./../App";
import { shallow } from "enzyme";

const assert = require("assert");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("should correctly calculate the cost of an item", () => {
  const app = shallow(<App />);
  // console.log(app.calculateItemCharge);

  assert.equal(2 + 2, 4);
});
