import iterateThroughObject from "./101-iterateThroughObject.js";

const employees = {
  ...createEmployeesObject("engineering", ["Bob", "Jane"]),
  ...createEmployeesObject("marketing", ["Sylvie"]),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
