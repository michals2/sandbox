/*
  Write a function that takes three arguments, two strings and an alphabet.
  Write a function that returns the word that comes first in the alphabet.
  What data structure would you use to store the alphabet? 

  For example: a given 4 letter ordered alphabet “zgac” how do you
  decide what word comes alphabetically first “aggd” vs. “aggz”
*/

function stringSort(strA, strB, alphabet) {
  const charOrder = {};
  for (let i = 0; i < alphabet.length; i++) {
    charOrder[alphabet[i]] = i;
  }
  for (let i = 0; i < strA.length; i++) {
    // check if same strings but one cut short
    if (strA[i] === undefined) return strA;
    if (strB[i] === undefined) return strB;
    if (charOrder[strA[i]] === charOrder[strB[i]]) continue;
    return charOrder[strA[i]] < charOrder[strB[i]] ? strA : strB;
  }
  return "they are the same";
}

console.log(stringSort("aggd", "aggz", "zgac"));
