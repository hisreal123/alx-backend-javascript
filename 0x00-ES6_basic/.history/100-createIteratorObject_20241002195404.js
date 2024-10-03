export default function createIteratorObject(report) {
  const reportWithIterator = {
    *[Symbol.iterator](){
        for (const value in report){
            if(Object.prototype.hasOwnProperty.call(report, value)) {
                
            }
        }
    }
  }

  return reportWithIterator;
}
