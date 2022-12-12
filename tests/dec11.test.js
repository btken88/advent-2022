const { monkeyBusiness, topMonkeys, longMonkeyBusiness } = require("../dec11");

const testData = `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`;
describe("dec11th tests", () => {
  test("it correctly calculates inspections", () => {
    const structuredData = [
      {
        items: [79, 98],
        operation: (old) => old * 19,
        test: (item) => {
          if (item % 23 === 0) return 2;
          return 3;
        },
        inspections: 0,
      },
      {
        items: [54, 65, 75, 74],
        operation: (old) => old + 6,
        test: (item) => {
          if (item % 19 === 0) return 2;
          return 0;
        },
        inspections: 0,
      },
      {
        items: [79, 60, 97],
        operation: (old) => old * old,
        test: (item) => {
          if (item % 13 === 0) return 1;
          return 3;
        },
        inspections: 0,
      },
      {
        items: [74],
        operation: (old) => old + 3,
        test: (item) => {
          if (item % 17 === 0) return 0;
          return 1;
        },
        inspections: 0,
      },
    ];
    const monkeyList = monkeyBusiness(structuredData);
    expect(monkeyList[0].inspections).toEqual(101);
    expect(monkeyList[1].inspections).toEqual(95);
    expect(monkeyList[2].inspections).toEqual(7);
    expect(monkeyList[3].inspections).toEqual(105);
  });
  test("it correctly calculates monkeyBusiness", () => {
    const structuredData = [
      {
        items: [79, 98],
        operation: (old) => old * 19,
        test: (item) => {
          if (item % 23 === 0) return 2;
          return 3;
        },
        inspections: 0,
      },
      {
        items: [54, 65, 75, 74],
        operation: (old) => old + 6,
        test: (item) => {
          if (item % 19 === 0) return 2;
          return 0;
        },
        inspections: 0,
      },
      {
        items: [79, 60, 97],
        operation: (old) => old * old,
        test: (item) => {
          if (item % 13 === 0) return 1;
          return 3;
        },
        inspections: 0,
      },
      {
        items: [74],
        operation: (old) => old + 3,
        test: (item) => {
          if (item % 17 === 0) return 0;
          return 1;
        },
        inspections: 0,
      },
    ];
    const monkeyList = monkeyBusiness(structuredData);
    expect(
      topMonkeys(monkeyList).first.inspections *
        topMonkeys(monkeyList).second.inspections
    ).toEqual(10605);
  });
  test("it correctly calculates longMonkeyBusiness", () => {
    const structuredData = [
      {
        items: [79, 98],
        operation: (old) => old * 19,
        test: (item) => {
          if (item % 23 === 0) return 2;
          return 3;
        },
        inspections: 0,
      },
      {
        items: [54, 65, 75, 74],
        operation: (old) => old + 6,
        test: (item) => {
          if (item % 19 === 0) return 2;
          return 0;
        },
        inspections: 0,
      },
      {
        items: [79, 60, 97],
        operation: (old) => old * old,
        test: (item) => {
          if (item % 13 === 0) return 1;
          return 3;
        },
        inspections: 0,
      },
      {
        items: [74],
        operation: (old) => old + 3,
        test: (item) => {
          if (item % 17 === 0) return 0;
          return 1;
        },
        inspections: 0,
      },
    ];
    const longMonkeyList = longMonkeyBusiness(structuredData, 10000);
    console.log(longMonkeyList);
    expect(
      topMonkeys(longMonkeyList).first.inspections *
        topMonkeys(longMonkeyList).second.inspections
    ).toEqual(2713310158);
  });
});
