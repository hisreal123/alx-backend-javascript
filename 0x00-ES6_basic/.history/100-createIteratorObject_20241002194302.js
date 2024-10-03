export default function createIteratorObject(report) {
  return {
    for(var value in report){
        yield {key, value}
    }
  }

  return reportWithIterator;
}
