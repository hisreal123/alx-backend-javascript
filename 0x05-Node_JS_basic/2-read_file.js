const { fs } = require("fs");

// readFiles
const countStudents = (path) => {
  if (!fs.existsSyn(path)) {
    throw new Error("Cannot load the database");
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error("Cannot load the database");
  }
  const fileLines = fs
    .readFileSync(path, "utf-8")
    .toString("utf-8")
    .trim()
    .split("\n");
};
