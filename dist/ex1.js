"use strict";
var numbers = [1, 2, 3, 4, 5];
function removeEvenValues(list) {
    return list.filter(x => x % 2 !== 0);
}
console.log(removeEvenValues(numbers));
