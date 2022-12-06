function rucksackList(input) {
    const rucksack = input.split('\n');
    const rucksackCompartments = rucksack.map(pack => {
        const midpoint = pack.length / 2;
        return [pack.slice(0, midpoint), pack.slice(midpoint)];
    })
    return rucksackCompartments;
}

function itemPriority(item) {
    const ascii = item.charCodeAt()
    if (ascii > 91) {
        return ascii - 96;
    }
    return ascii - 38;
}

function outOfPlace(rucksack) {
    const items = {}
    for (let i = 0; i < rucksack[0].length; i++) {
        items[rucksack[0][i]] = 1;
    }
    for (const item of rucksack[1]) {
        if (items[item]) return item;
    }
}

function prioritizedTotal(rucksackList) {
    return rucksackList.reduce((prev, curr) => {
        const letter = outOfPlace(curr);
        return prev + itemPriority(letter);
    }, 0)
}

function groupList(input) {
    const rucksacks = input.split('\n');
    let groups = [];
    while (rucksacks.length) {
        groups.push(rucksacks.splice(0, 3))
    }
    return groups;
}

function groupBadgeLetter(groupList) {
    const items1 = {};
    const items2 = {};
    for (const item of groupList[0]) {
        items1[item] = 1;
    }
    for (const item of groupList[1]) {
        items2[item] = 1;
    }
    for (const item of groupList[2]) {
        if (items1[item] && items2[item]) return item;
    }
}

function groupPriority(groups) {
    return groups.reduce((prev, curr) => {
        const groupLetter = groupBadgeLetter(curr);
        return prev + itemPriority(groupLetter);
    }, 0)
}

module.exports = {rucksackList, itemPriority, outOfPlace, prioritizedTotal, groupList, groupBadgeLetter}
