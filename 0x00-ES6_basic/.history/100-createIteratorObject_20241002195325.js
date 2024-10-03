export default function createIteratorObject(report) {
  const reportWithIterator = {
    *[Symbol.iterator](){
        for (const value in report)
    }
  }

  return reportWithIterator;
}
