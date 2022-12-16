function parseInput(data) {
  return data.split("\n\n").map((dataPairs) => {
    return dataPairs.split("\n").map((datum) => JSON.parse(datum));
  });
}

function testPackets([left, right]) {
  if (left && right) {
    if (parseInt(left) && parseInt(right)) {
      return left < right;
    } else if (typeof left === "object" && typeof right === "object") {
      if (left.length == 0 && right.length) {
        return true;
      }
      if (left.length <= right.length) {
        for (let i = 0; i < left.length; i++) {
          testPackets([left[i], right[i]]);
        }
      }
    } else if (parseInt(left)) {
      testPackets([[left], right]);
    } else if (parseInt(right) && left) {
      testPackets([left, [right]]);
    }
  }
  return false;
}

function correctIndices(packets) {
  const indices = [];
  for (let i = 0; i < packets.length; i++) {
    if (testPackets(packets[i])) indices.push(i + 1);
  }
  return indices;
}

// const { dec13 } = require("./inputs");
// const testData = parseInput(dec13);
// const correctIndicesList = correctIndices(testData);
// console.log(correctIndicesList);
// console.log(correctIndicesList.reduce((prev, cur) => (prev += cur), 0));

module.exports = { parseInput, testPackets, correctIndices };
