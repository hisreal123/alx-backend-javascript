export default function createIteratorObject(report) {
  // Make the report iterable by using a custom iterator
  const reportWithIterator = {
    *[Symbol.iterator]() {
      for (const department in report) {
        if (Object.prototype.hasOwnProperty.call(report, department)) {
          // Yield each value (this would be report[department])
         for (const employees)
        }
      }
    },
  };

  return reportWithIterator;
}
