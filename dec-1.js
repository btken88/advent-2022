function calories(calorieList) {
  const sums = [];
  const calories = calorieList.split("\n");
  let runningTotal = 0;
  for (let i = 0; i < calories.length; i++) {
    if (calories[i] != "") {
      runningTotal += parseInt(calories[i]);
    } else {
      sums.push(runningTotal);
      runningTotal = 0;
    }
  }
  sums.push(runningTotal);
  return Math.max(...sums);
}

function topCalories(calorieList) {
  const sums = [];
  const calories = calorieList.split("\n");
  let runningTotal = 0;
  for (let i = 0; i < calories.length; i++) {
    if (calories[i] != "") {
      runningTotal += parseInt(calories[i]);
    } else {
      sums.push(runningTotal);
      runningTotal = 0;
    }
  }
  sums.push(runningTotal);
  sums.sort(compareNumbers);
  return sums[0] + sums[1] + sums[2];
}

function compareNumbers(a, b) {
  return b - a;
}

module.exports = { calories, topCalories };
