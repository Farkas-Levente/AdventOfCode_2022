const { readFileInAll } = require("../FileRead.js");

const signals = readFileInAll("./Day6/Day6.txt");

for (i = 3; i < signals.length; i++) {
  let lastFour = signals[i - 3] + signals[i - 2] + signals[i - 1] + signals[i];
  let counter = {};
  for (j = 0; j < lastFour.length; j++) {
    if (counter[lastFour[j]] == undefined) {
      counter = { ...counter, [lastFour[j]]: 1 };
    } else {
      counter[lastFour[j]]++;
    }
  }
  if (
    counter[lastFour[0]] === 1 &&
    counter[lastFour[1]] === 1 &&
    counter[lastFour[2]] === 1 &&
    counter[lastFour[3]] === 1
  ) {
    console.log(i + 1);
    break;
  }
}
