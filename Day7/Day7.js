const { syncReadFile } = require("../FileRead.js");

const arr = syncReadFile("./Day7/Day7.txt");

//Base variables
let currentDirectory = ["/"];
let directories = [{ size: 0, parent: " ", path: "/", directFiles: [] }];

//Process the Input
arr.forEach((line) => {
  readInLine(line);
});

//Solve Part 1
let sum = 0;
directories
  .filter((dir) => dir.size <= 100000)
  .forEach((x) => {
    sum += parseInt(x.size);
  });
console.log("The sum: " + sum);

//Solve Part 2
const maxFileSpace = 70000000;
const spaceNeeded = 30000000;
const freeSpace = maxFileSpace - directories[0].size;
const needsToBeFreed = spaceNeeded - freeSpace;

let filteredDirectories = directories
  .filter((dir) => dir.size >= needsToBeFreed)
  .sort((a, b) => {
    return b - a;
  });

console.log(filteredDirectories[filteredDirectories.length - 1].size);

//A function for processing a line of data
//Console Logs serve as debugging elements
function readInLine(line) {
  let splits = line.split(" ");

  if (splits[0] == "$" && splits[1] == "cd") {
    changeDirectory(splits[2]);
    // console.log("Changing directory to " + splits[2]);
  } else if (splits[0] == "$" && splits[1] == "ls") {
    // console.log("Listing");
  } else if (splits[0] == "dir") {
    // console.log("Found a directory: " + splits[1]);
  } else {
    addFile(parseInt(splits[0]), splits[1]);
    // console.log(
    //   `Adding file: ${splits[1]} with size: ${splits[0]} \n Main directory fileSize: ${directories[0].size}`
    // );
  }
}
//Function for handling cd in data
function changeDirectory(dirName) {
  if (dirName == "/") {
    while (currentDirectory[currentDirectory.length - 1] != "/") {
      currentDirectory.pop();
    }
  } else if (dirName == "..") {
    currentDirectory.pop();
  } else {
    directories = [
      ...directories,
      {
        size: 0,
        parent: getStringCurrentDir(),
        path: getStringCurrentDir() + "|" + dirName,
        directFiles: [],
      },
    ];
    currentDirectory.push(dirName);
  }
}
//Function for handling files in data
function addFile(size, name) {
  let currentDirObj = directories.find(
    (dir) => dir.path == getStringCurrentDir()
  );

  if (!currentDirObj.directFiles.includes(name)) {
    currentDirObj.size += size;
    currentDirObj.directFiles.push(name);
  }
  let currentParent = currentDirObj.parent;
  while (currentParent != " ") {
    let parentDirObj = directories.find((dir) => dir.path == currentParent);

    parentDirObj.size += size;
    currentParent = parentDirObj.parent;
  }
}
//Function for identifying paths, it returns basically the key that each directory has
function getStringCurrentDir() {
  let localDir = "";
  let isFirst = true;
  currentDirectory.forEach((dir) => {
    if (isFirst) {
      localDir += dir;
      isFirst = false;
    } else {
      localDir += "|" + dir;
    }
  });
  return localDir;
}
