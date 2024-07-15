type Tab = {
    value: number,
    label: string,
}[];

let tab: Tab = [{value: 1, label: 'a'}, {value: 2, label: 'b'}, {value: 3, label: 'c'},{value: 1, label: 'a'}];

const findLabelOrValues = (tab: Tab, target: string | number): string[] | number[] => {
    if (typeof target === "number" ) {
        return tab.filter(x => (x.value === target)).map(x => x.label);
    }
    if (typeof target === "string") {

        return tab.filter(x => x.label === target).map(x => x.value);
    }
    return [];
}

console.log(findLabelOrValues(tab, 'a'));