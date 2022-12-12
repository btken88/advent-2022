const mathjs = require("mathjs");

function monkeyBusiness(data) {
  for (let i = 0; i < 20; i++) {
    data.forEach((monkey) => {
      while (monkey.items.length) {
        let item = monkey.items.shift();
        item = monkey.operation(item);
        item = Math.floor(item / 3);
        data[monkey.test(item)].items.push(item);
        monkey.inspections++;
      }
    });
  }
  return data;
}

function longMonkeyBusiness(data, rounds) {
  for (let i = 0; i < rounds; i++) {
    data.forEach((monkey) => {
      while (monkey.items.length) {
        let item = monkey.items.shift();
        item = mathjs.bignumber(monkey.operation(item));
        data[monkey.test(item)].items.push(item);
        monkey.inspections++;
      }
    });
  }
  return data;
}

function topMonkeys(monkeyList) {
  const tops = {
    first: { monkey: undefined, inspections: 0 },
    second: { monkey: undefined, inspections: 0 },
  };
  for (let i = 0; i < monkeyList.length; i++) {
    const monkeyInspections = monkeyList[i].inspections;
    if (monkeyInspections > tops.first.inspections) {
      tops.second.monkey = tops.first.monkey;
      tops.second.inspections = tops.first.inspections;
      tops.first.monkey = i;
      tops.first.inspections = monkeyInspections;
    } else if (monkeyInspections > tops.second.inspections) {
      tops.second.monkey = i;
      tops.second.inspections = monkeyInspections;
    }
  }
  return tops;
}

module.exports = { monkeyBusiness, topMonkeys, longMonkeyBusiness };

const { dec11 } = require("./inputs");
const monkeyList = longMonkeyBusiness(dec11, 10000);
const topMonkey = topMonkeys(monkeyList);
console.log(topMonkey);
console.log(topMonkey.first.inspections * topMonkey.second.inspections);

//129090022456 wrong
