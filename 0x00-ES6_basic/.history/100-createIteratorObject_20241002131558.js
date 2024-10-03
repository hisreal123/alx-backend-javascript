export default function createIteratorObject(report) {
  const iterator = {
    next: function () {
        report;
    }
  }

  return iterator;
}
