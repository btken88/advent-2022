function parseInput(inputData) {
  const data = inputData.split("\n");
  const formattedData = [];
  for (const line of data) {
    const row = line.split("");
    formattedData.push(row.map((height) => parseInt(height)));
  }
  return formattedData;
}

function isVisible(height, preceding, following) {
  if (Math.max(...preceding) < height || Math.max(...following) < height) {
    return true;
  }
  return false;
}

function countVisibleTrees(treeGrid) {
  let visibleTrees = 0;
  visibleTrees += treeGrid.length * 4 - 4;
  for (let i = 1; i < treeGrid.length - 1; i++) {
    for (let j = 1; j < treeGrid.length - 1; j++) {
      const column = [];
      for (let k = 0; k < treeGrid.length; k++) {
        column.push(treeGrid[k][j]);
      }
      const rowBefore = treeGrid[i].slice(0, j);
      const rowAfter = treeGrid[i].slice(j + 1);
      const visibleRow = isVisible(treeGrid[i][j], rowBefore, rowAfter);
      const colBefore = column.slice(0, i);
      const colAfter = column.slice(i + 1);
      const visibleCol = isVisible(treeGrid[i][j], colBefore, colAfter);
      if (visibleCol || visibleRow) visibleTrees++;
    }
  }
  return visibleTrees;
}

function calculateViewScore(tree, colBefore, colAfter, rowBefore, rowAfter) {
  const distances = { up: 0, down: 0, left: 0, right: 0 };
  while (colBefore.length > 0) {
    distances.up += 1;
    if (colBefore[colBefore.length - 1] < tree) {
      colBefore.pop();
    } else break;
  }
  for (let i = 0; i < colAfter.length; i++) {
    distances.down++;
    if (colAfter[i] >= tree) i = colAfter.length;
  }
  while (rowBefore.length > 0) {
    distances.left += 1;
    if (rowBefore[rowBefore.length - 1] < tree) {
      rowBefore.pop();
    } else break;
  }
  for (let i = 0; i < rowAfter.length; i++) {
    distances.right++;
    if (rowAfter[i] >= tree) i = rowAfter.length;
  }
  return distances.up * distances.down * distances.left * distances.right;
}

function findHighestScore(treeGrid) {
  let highestScore = 0;
  for (let i = 1; i < treeGrid.length - 1; i++) {
    for (let j = 1; j < treeGrid.length - 1; j++) {
      const column = [];
      for (let k = 0; k < treeGrid.length; k++) {
        column.push(treeGrid[k][j]);
      }
      const rowBefore = treeGrid[i].slice(0, j);
      const rowAfter = treeGrid[i].slice(j + 1);
      const colBefore = column.slice(0, i);
      const colAfter = column.slice(i + 1);
      const viewScore = calculateViewScore(
        treeGrid[i][j],
        colBefore,
        colAfter,
        rowBefore,
        rowAfter
      );
      if (viewScore > highestScore) {
        highestScore = viewScore;
      }
    }
  }
  return highestScore;
}

module.exports = {
  parseInput,
  isVisible,
  countVisibleTrees,
  calculateViewScore,
  findHighestScore,
};

function generateTestData(length) {
  let dataString = "";
  for (let i = 0; i < length; i++) {
    ``;
    let data = "";
    for (let j = 0; j < length; j++) {
      data += Math.floor(Math.random() * 10);
    }
    if (i !== length - 1) data += "\n";
    dataString += data;
  }
  return dataString;
}
// const { dec8 } = require("./inputs");
// console.log(findHighestScore(parseInput(dec8)));

// console.log(generateTestData(9));
