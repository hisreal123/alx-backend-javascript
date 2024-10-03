export default function createIteratorObject(report) {
  const reportWithIterator = {};
  const iterator = () => {
    for (const value in report) {
        if (Object.prototype.hasOwnProperty.call(report, value)) {
            reportWithIterator[value] = report[value];
        }
    }
  }

  return reportWithIterator;
}
