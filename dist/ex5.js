"use strict";
let tab2 = [{ value: 1, label: 'a' }, { value: 2, label: 'b' }, { value: 3, label: 'c' }, { value: 1, label: 'a' }];
const changeLabel = (tab, label, newLabel) => {
    tab.forEach(x => {
        if (x.label === label) {
            x.label = newLabel;
        }
    });
    return tab;
};
console.log(changeLabel(tab2, 'a', 'z'));
