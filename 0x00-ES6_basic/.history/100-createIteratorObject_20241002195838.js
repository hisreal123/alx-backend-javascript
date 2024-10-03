export default function createIteratorObject(report) {
  // Make the report iterable by using a custom iterator
  const reportWithIterator = {
    *[Symbol.iterator]() {
      for (const department in report) {
        if (Object.prototype.hasOwnProperty.call(report, department)) {
          // Manually yield each employee from the department (assuming it's an array of employees)
          for (const employee of report[department]) {
            yield employee;
          }
        }
      }
    },
  };

  return reportWithIterator;
}
