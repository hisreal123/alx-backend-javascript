export default function createIteratorObject(report) {
  return {
    for(key, value in report){
        yield {key, value}
    }
  }

  return reportWithIterator;
}
