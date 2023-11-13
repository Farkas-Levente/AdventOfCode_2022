const { readFileInAll } = require("../FileRead.js");

const signals = readFileInAll("./Day6/Day6.txt");

function Part1Solution() {
  for (i = 3; i < signals.length; i++) {
    let lastFour =
      signals[i - 3] + signals[i - 2] + signals[i - 1] + signals[i];
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
}

function Part2Solution() {
  for (i = 13; i < signals.length; i++) {
    let lastFourteen = "";
    for (j = i - 13; j < i + 1; j++) {
      lastFourteen += signals[j];
    }

    let counter = {};
    for (j = 0; j < lastFourteen.length; j++) {
      if (counter[lastFourteen[j]] == undefined) {
        counter = { ...counter, [lastFourteen[j]]: 1 };
      } else {
        counter[lastFourteen[j]]++;
      }
    }
    let foundIt = true;
    for (j = 0; j < 14; j++) {
      if (counter[lastFourteen[j]] > 1) {
        foundIt = false;
      }
    }
    if (foundIt) {
      console.log(i + 1);
      return;
    }
  }
}
Part2Solution();
