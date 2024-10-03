export default function createIteratorObject(report) {
  const reportWithIterator = () => {
    for (const key in report) {
        return key;
        // if (Object.prototype.hasOwnProperty.call(object, key)) {
        //     const element = object[key];
            
        // }
    }
  }

  return reportWithIterator;
}
