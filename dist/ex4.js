"use strict";
var newArray = [1, 2, 3, 4, 5];
Object.freeze(newArray);
var copyArray = Array.from(newArray);
var otherCopyArray = [...newArray];
Object.freeze(copyArray);
otherCopyArray.push(8);
console.log(newArray);
console.log(copyArray);
console.log(otherCopyArray);