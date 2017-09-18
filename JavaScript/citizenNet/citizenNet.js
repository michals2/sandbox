/*
1. Create a 'spacify' function directly on the String object that returns
the same string with each character separated by a space. E.g.:
'hello world'.spacify(); //'h e l l o   w o r l d'
*/
String.prototype.spacify = function() {
  // return this.split("").map(letter => `${letter} `).join("");
  let newStr = "";
  for (let i = 0; i < this.length; i++) {
    newStr += this[i] + " ";
  }
  return newStr;
};
// console.log("hello world".spacify());

/*
2, In the front-end language of your choice, implement the following:
 given a list of integers, take each integer in that list and double it,
then square the doubled value, then as output, sum together all the squared values. E.g.:

doubleSquareSum [1] // 4 
doubleSquareSum [1, 2] // 20 
doubleSquareSum [1, 2, 3] // 56 
doubleSquareSum [1, 2, 3, 4] // 120
*/
function doubleSquareSum(arr) {
  return arr.map(e => Math.pow(e * 2, 2)).reduce((a, c) => a + c, 0);
}

/*
3. Polyfill 'reduce', 'map', and 'filter' directly on the Array object,
 so that you could do the following for example:

[1,2,3].filter(isOdd)
*/

const isOdd = e => e % 2 === 1;
// console.log([1, 2, 3].filter(isOdd));

/*
4. Suppose you have this code:


What is the console output when the first and the fourth buttons are clicked, and why?
*/

document.addEventListener("DOMContentLoaded", function() {
  // code...
  var nodes = document.getElementsByTagName("button");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener("click", function() {
      console.log("Element #" + i);
    });
  }
});

// module.exports = { StringPrototype: String, doubleSquareSum };
