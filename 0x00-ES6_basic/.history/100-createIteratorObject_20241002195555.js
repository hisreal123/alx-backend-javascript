export default function createIteratorObject(report) {
  const reportWithIterator = {
    *[Symbol.iterator]() {
         for (const department in report) {
           if (Object.prototype.hasOwnProperty.call(report, department)) {
             // Yield each value (this would be report[department])
             yield * report[department];
           }
         }
    }
  }

  return reportWithIterator;
}
