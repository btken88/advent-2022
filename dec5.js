function convertSteps(steps) {
  const stepArray = steps.split('\n');
  return stepArray.map(step => {
    const [, count, , fromCol, , toCol] = step.split(' ');
    return [parseInt(count), parseInt(fromCol), parseInt(toCol)];
  })
}

function parseMove(startPosition, steps) {
  for (const [count, fromCol, toCol] of steps) {
    for (let i = 0; i < count; i++) {
      const box = startPosition[fromCol].pop();
      startPosition[toCol].push(box)
    }
  }
  let topBoxes = '';
  for (const pile in startPosition) {
    topBoxes += startPosition[pile][startPosition[pile].length - 1]
  }
  return topBoxes;
}

function parseMove9001(startPosition, steps) {
  for (const [count, fromCol, toCol] of steps) {
    const boxes = startPosition[fromCol].splice(-count)
    startPosition[toCol] = startPosition[toCol].concat(boxes);
  }
  let topBoxes = '';
  for (const pile in startPosition) {
    topBoxes += startPosition[pile][startPosition[pile].length - 1]
  }
  return topBoxes;
}

module.exports = { convertSteps, parseMove, parseMove9001 };

const {dec5} = require('./inputs')
console.log(parseMove9001(dec5.start, convertSteps(dec5.steps)))
