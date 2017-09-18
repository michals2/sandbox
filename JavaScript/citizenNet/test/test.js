const assert = require("assert");

const myModule = require("../citizenNet");
const { doubleSquareSum, StringPrototype } = myModule;

String = StringPrototype;

console.log("hello".spacify());

describe("citizenNet Tests", function() {
  describe("spacify", function() {
    it("should work on srings without spaces", function() {
      assert.equal("h e l l o ", "hello".spacify());
    });
    it("should work on srings with spaces", function() {
      assert.equal("h e l l o   w o r l d ", "hello world".spacify());
    });
  });
  describe("doubleSquareSum", function() {
    it("should work on array length 1", function() {
      assert.equal(4, doubleSquareSum([1]));
    });
    it("should work on array length 2", function() {
      assert.equal(20, doubleSquareSum([1, 2]));
    });
    it("should work on array length 3", function() {
      assert.equal(56, doubleSquareSum([1, 2, 3]));
    });
    it("should work on array length 4", function() {
      assert.equal(120, doubleSquareSum([1, 2, 3, 4]));
    });
  });
});
