export default function createIteratorObject(report) {
  const reportWithIterator = {
    *[Symbol.iterator]
  }

  return reportWithIterator;
}
