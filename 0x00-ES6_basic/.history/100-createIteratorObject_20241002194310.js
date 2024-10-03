export default function createIteratorObject(report) {
  return {
    for(var key in report){
        yield {key, value}
    }
  }

  return reportWithIterator;
}
