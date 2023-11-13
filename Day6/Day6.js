const { readFileInAll } = require("../FileRead.js");

const signals = readFileInAll("./Day6/Day6.txt");

function SolveSignals(letterAmount) {
  //Go through all the letters
  for (i = letterAmount; i < signals.length; i++) {
    //Fill up the last given letters
    let lastGivenLetters = "";
    for (j = i - letterAmount; j < i; j++) {
      lastGivenLetters += signals[j];
    }

    //Store the letters types for a later check
    let counter = {};
    for (j = 0; j < lastGivenLetters.length; j++) {
      if (counter[lastGivenLetters[j]] == undefined) {
        counter = { ...counter, [lastGivenLetters[j]]: 1 };
      } else {
        counter[lastGivenLetters[j]]++;
      }
    }
    //Check if the sequence is correct
    let foundIt = true;
    for (j = 0; j < letterAmount; j++) {
      if (counter[lastGivenLetters[j]] > 1) {
        foundIt = false;
      }
    }
    //If correct, we are done
    if (foundIt) {
      console.log(i);
      return;
    }
  }
}

SolveSignals(4);
SolveSignals(14);
