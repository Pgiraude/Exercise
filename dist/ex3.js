"use strict";
let emptyArray = new Array(12);
function fillArray(array) {
    for (var i = 0; i < array.length && i < 10; i++) {
        array[i] = i + 1;
    }
    return (array);
}
const test = () => {
    fillArray(emptyArray);
};
test();
console.log(emptyArray);
