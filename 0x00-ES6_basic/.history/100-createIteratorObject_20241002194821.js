export default function createIteratorObject(report) {
    const reportWithIterator = {};
  const iterator = () => {
    for (const value in report) {
        if (Object.prototype.hasOwnProperty.call(report, value)) {
            
        return value;
        // if (Object.prototype.hasOwnProperty.call(object, key)) {
        //     const element = object[key];
            
        // }
    }
  }

  return reportWithIterator;
}
