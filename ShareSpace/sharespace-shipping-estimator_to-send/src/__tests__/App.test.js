import React from "react";
import ReactDOM from "react-dom";
import App from "./../App";
import { shallow } from "enzyme";

const assert = require("assert");

describe("integration tests", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

describe("unit tests", () => {
  it("should correctly calculate the cost of a couch", () => {
    const wrapper = shallow(<App />).instance();
    const calculateItemCharge = wrapper.calcualteItemCharge;

    const distance = 10;
    const item = {
      type: "Couch",
      dimL: 10,
      dimH: 6,
      dimW: 3
    };

    const expectedCost = 2 * 10 * 3 * distance + 50;

    assert.equal(calculateItemCharge(distance, item), expectedCost);
  });
  it("should correctly calculate the cost of a bed", () => {
    const wrapper = shallow(<App />).instance();
    const calculateItemCharge = wrapper.calcualteItemCharge;

    const distance = 10;
    const item = {
      type: "Bed",
      dimL: 10,
      dimH: 6,
      dimW: 3
    };

    const expectedCost = 2 * 6 * 3 * distance + 20;

    assert.equal(calculateItemCharge(distance, item), expectedCost);
  });
});
