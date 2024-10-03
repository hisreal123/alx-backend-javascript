export default function createIteratorObject(report) {
  const reportWithIterator () {
    next: function () {
      report;
    },
  };

  return reportWithIterator;
}
