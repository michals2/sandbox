/*
call()
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    The call() method calls a function with a given this value and arguments provided individually.
    Use cases:
        -Chain constructors for an object (below)
        -Invoke an anonymous function
        -Invoke a function and specify the context for 'this'
*/

const l = console.log;

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  // console.log(this)
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
l('cheese --> ', cheese);
var fun = new Toy('robot', 40);
l('fun --> ', fun);
