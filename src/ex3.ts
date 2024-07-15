let emptyArray = new Array(12);

function fillArray(array: number[]): number[] {
    for (var i = 0; i < array.length && i < 10 ; i++) {
        array[i] = i + 1;
    }
    return (array);
}

const test = (): void => {
    fillArray(emptyArray);
}

test();
console.log(emptyArray);