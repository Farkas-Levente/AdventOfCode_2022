const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day4/Day4.txt");

let ranges = new Array();
//Extract the ranges
for (i = 0; i < arr.length; i++) {
  const range1 = arr[i].split(",")[0];
  const range2 = arr[i].split(",")[1];
  ranges.push(range1);
  ranges.push(range2);
}

//Pair the ranges as objects
let pairs = [];
for (i = 0; i < ranges.length; i += 2) {
  pairs.push({
    firstPair: {
      start: parseInt(ranges[i].toString().split("-")[0]),
      end: parseInt(ranges[i].toString().split("-")[1]),
    },
    secondPair: {
      start: parseInt(ranges[i + 1].toString().split("-")[0]),
      end: parseInt(ranges[i + 1].toString().split("-")[1]),
    },
  });
}

//Solve the riddle
let count = 0;

pairs.forEach((pair) => {
  if (
    (pair.firstPair.start <= pair.secondPair.start &&
      pair.firstPair.end >= pair.secondPair.end) ||
    (pair.secondPair.start <= pair.firstPair.start &&
      pair.secondPair.end >= pair.firstPair.end)
  ) {
    count++;
  }
});
console.log("Total overlaps: " + count);

//Part 2
let secondCount = 0;
//Go through the pairs
pairs.forEach((pair) => {
  //Extract the sections for better understanding
  let firstSection = [];
  let secondSection = [];
  let overlap = false;
  for (i = pair.firstPair.start; i <= pair.firstPair.end; i++) {
    firstSection.push(i);
  }
  for (i = pair.secondPair.start; i <= pair.secondPair.end; i++) {
    secondSection.push(i);
  }

  //Check if there is an overlap
  firstSection.forEach((item) => {
    if (secondSection.includes(item)) {
      overlap = true;
    }
  });

  //If there is, increment
  if (overlap) {
    secondCount++;
  }
});
//Log The solution
console.log("Any overlaps: " + secondCount);
