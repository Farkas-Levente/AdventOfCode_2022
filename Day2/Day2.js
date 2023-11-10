const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day2/Day2.txt");

//Rock Paper Scissors
//A    B     C   ---Opponent
//X    Y     Z   ---Us
//1    2     3

//Loss:0 Draw:3 Win:6

let myPoints = 0;

arr.forEach((round) => {
  calCulateInitialPoints(round);

  calculateDraws(round);
  calculateWins(round);
});

console.log(myPoints);

function calculateWins(round) {
  if (round[0] === "A" && round[2] === "Y") {
    myPoints += 6;
  } else if (round[0] === "B" && round[2] === "Z") {
    myPoints += 6;
  } else if (round[0] === "C" && round[2] === "X") {
    myPoints += 6;
  }
}
function calculateDraws(round) {
  if (round[0] === "A" && round[2] === "X") {
    myPoints += 3;
  } else if (round[0] === "B" && round[2] === "Y") {
    myPoints += 3;
  } else if (round[0] === "C" && round[2] === "Z") {
    myPoints += 3;
  }
}
function calCulateInitialPoints(round) {
  if (round[2] === "X") {
    myPoints += 1;
  } else if (round[2] === "Y") {
    myPoints += 2;
  } else {
    myPoints += 3;
  }
}
