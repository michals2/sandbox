// Functions are objects in JS
function greeting() {
  console.log("hello");
}
// console.log(typeof greeting.prototype);

// Can define methods on the object prototype. Method is available to all instances of that object
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
Dog.prototype.bark = function() {
  console.log("woof!");
};
const bella = new Dog("Bella", "Golden");
// bella.bark();

// JS uses inheritance model called "Differential Inheritance"
// Methods are not copied and pasted
// Link is made to parent object
var parent = {
  foo: function() {
    console.log("bar");
  }
};
var child = Object.create(parent);
// console.log(child.hasOwnProperty("foo"));
// child.foo(); // ‘bar’

/********************* Test ******************************/

function Car() {}
Car.prototype.drive = function() {
  console.log("vroom");
};
const jeep = new Car();
// jeep.drive();

/*********************************************************/

// __proto__ vs prototype
// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc
// prototype is the object that is used to build __proto__ when you create an object with new

// Subclassing

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};
const rect = new Rectangle(3, 4);
// console.log(rect.area());

/*
  {area, constructor}
  |
  Rectangle
*/

function Square(length) {
  this.width = this.height = length;
}
Square.prototype = Object.create(Rectangle.prototype);

/*
  Rectangle.prototype
  |             |
  Rectangle     Square.Prototype
                |
                Square
*/
Square.prototype.diagonal = function() {
  return Math.sqrt(this.area() * 2);
};

/*
  Rectangle.prototype {area: function}
  |             |
  Rectangle     Square.Prototype {diagonal: function}
                |
                Square
*/

const footballField = new Rectangle(160, 300);
console.log(footballField.area());
// console.log(footballField.diagonal());

const baseballDiamond = new Square(90);
console.log(baseballDiamond.area());
console.log(baseballDiamond.diagonal());
