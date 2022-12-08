function convertList(list) {
  return list.split("\n").map((item) => {
    return item.split(",").map((item) => {
      return item.split("-").map((number) => parseInt(number));
    });
  });
}

function cleanupOverlapFull(list) {
  let overlaps = 0;
  for (const pair of list) {
    if (
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) ||
      (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1])
    ) {
      overlaps++;
    }
  }
  return overlaps;
}

function cleanupOverlapAny(list) {
  let overlaps = 0;
  for (const pair of list) {
    if (
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][0]) ||
      (pair[0][0] <= pair[1][1] && pair[0][1] >= pair[1][1]) ||
      (pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][0]) ||
      (pair[1][0] <= pair[0][1] && pair[1][1] >= pair[0][1])
    ) {
      overlaps++;
    }
  }
  return overlaps;
}

module.exports = { convertList, cleanupOverlapFull, cleanupOverlapAny };

// const {dec4} = require('./inputs')

// console.log(cleanupOverlapAny(convertList(dec4)))
