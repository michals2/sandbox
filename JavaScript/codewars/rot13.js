const expect = require("expect");

/*
  ROT13 is a simple letter substitution cipher that replaces a letter with
  the letter 13 letters after it in the alphabet. ROT13 is an example of
  the Caesar cipher.

  Create a function that takes a string and returns the string
  ciphered with Rot13. If there are numbers or special characters
  included in the string, they should be returned as they are. 
  Only letters from the latin/english alphabet should be shifted,
  like in the original Rot13 "implementation".

  Please note that using "encode" in Python is considered cheating.
*/

function rot13(str) {
  result = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str.charCodeAt(i));
    const charCode = str.charCodeAt(i);
    // lower case
    if (charCode >= 97 && charCode <= 122) {
      result +=
        charCode + 13 > 122
          ? String.fromCharCode(charCode + 13 - 26)
          : String.fromCharCode(charCode + 13);
      continue;
    }
    // upper case
    if (charCode >= 65 && charCode <= 90) {
      result +=
        charCode + 13 > 90
          ? String.fromCharCode(charCode + 13 - 26)
          : String.fromCharCode(charCode + 13);
      continue;
    }
    // non alpha
    result += str[i];
  }
  return result;
}

/*
  {
    a: 97
    b: 122
    A: 65,
    Z: 90,
  }
*/

// abcdefghijklmnopqrstuvwxyz
// 01234567890123456789012345

console.log(rot13("888"));  // grfg
console.log(rot13("Test")); // Grfg
