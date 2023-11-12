const { readFileSync } = require("fs");

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}
function readFileInAll(filename) {
  const contents = readFileSync(filename, "utf-8");
  return contents;
}
module.exports = { syncReadFile, readFileInAll };
