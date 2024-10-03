export default function createIteratorObject(report) {
  // Make the report iterable by using a custom iterator
 return (function* _()) {
    for (const dep in report) {
 }

  return reportWithIterator;
}
