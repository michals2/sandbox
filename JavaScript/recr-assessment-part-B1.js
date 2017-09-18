const l = console.log;

/*
    Write a function (functionLocker) that takes in two functions as input and
    returns a new function.
    The first input function will be a predicate function that takes a number as
    input and returns true if the number passes a certain test; false otherwise.
    The second input function is a secret function that takes an unknown number of
    parameters.
    The returned function takes a number as its first parameter. If the number
    passes the predicate function, the secret function runs with any additional
    parameters passed into it. If the predicate fails, return undefined;

    ex.
    function isEven(num) { return num % 2 === 0; }
    function addStrings(a, b, c) { return a + '--' + b + '--' + c; }

    const lockedFunc = functionLocker(isEven, addNums);

    lockedFunc(4, 'I', 'love', 'Codesmith') --> 'I--love--Codesmith'
    lockedFunc(3, 'I', 'love', 'Codesmith') -->  undefined
*/

function functionLocker(predicateFunc, secretFunc) {
    return function () {
        const number = [...arguments][0]
        const remaining = [...arguments].slice(1)
        if(predicateFunc(number)) return secretFunc(...remaining)
        else return undefined
    }
}

// function isEven(num) { return num % 2 === 0; }
// function addStrings(a, b, c) { return a + '--' + b + '--' + c; }
// const lockedFunc = functionLocker(isEven, addStrings);
// l(lockedFunc(4, 'I', 'love', 'Codesmith')) //--> 'I--love--Codesmith'
// l(lockedFunc(3, 'I', 'love', 'Codesmith')) //-->  undefined

/*
    Write a function (keywordCount) that takes as input an object of key-value
    pairs and a string. The object can have as values numbers, booleans, strings,
    or nested objects. There will be NO arrays or other object types in
    the object. Your function should return the number of times the keyword
    appears in the object. (Note: the keyword will never be an object key - only
    a value)

    ex.
    const myObj = { a: 'hi', b: 'yo', c: { d: 'ciao', e: 'hi' } };
    keywordCount(myObj, 'hi') --> 2
    keywordCount(myObj, 'bye') --> 0
*/

function keywordCount(obj, keyword) {

    // check if obj contains any objects
    // l(typeof(obj))
    const values = Object.values(obj);
    if (values.filter((v)=>typeof(v)==='object').length) return values.reduce((a,c) => {
        l('c', c)
        if(c===keyword) return a++;
        else return a;
        },0)
        // if false return occurences of keyword
        // if true return occurences of keyword + recursive call on all objects

}

const myObj = { a: 'hi', b: 'yo', c: { d: 'ciao', e: 'hi' } };
const myObj2 = { a: 'hi', b: 'yo' };
// l(keywordCount(myObj, 'hi')) //--> 2
// l(keywordCount(myObj, 'bye')) //--> 0
l(keywordCount(myObj2, 'bye')) //--> 0



/*
    Write a function (closestToTarget) that takes as input an array of numbers, a
    callback function, and a target number. closestToTarget will pass each number
    in the array to the callback and return the number in the original array
    whose callback value is closest to the target number. (If more than one are
    the closest, return the first one.)

    ex.
    function flipEvens(num) { return (num % 2 === 0) ? -num : num; }
    const myArr = [3, -2, 6, 0];

    closestToTarget(myArr, flipEvens, 5) --> 3 (myArr[0])
    closestToTarget(myArr, flipEvens, -5) --> 6 (myArr[2])
*/

function closestToTarget(arr, callback, target) {
    
}

module.exports = { functionLocker, keywordCount, closestToTarget };
