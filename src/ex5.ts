let tab2: Tab = [{value: 1, label: 'a'}, {value: 2, label: 'b'}, {value: 3, label: 'c'},{value: 1, label: 'a'}];

const changeLabel = (tab: Tab, label: string, newLabel: string): Tab => {
    tab.forEach(x => {
        if (x.label === label) {
            x.label = newLabel
        }
    })
    return tab;
}

console.log(changeLabel(tab2, 'a', 'z'));