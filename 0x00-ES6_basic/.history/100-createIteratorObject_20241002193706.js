export default function createIteratorObject(report) {
  const reportWithIterator = (report) => {
    const iterator = {
        next: () => {
            const { value, done } = getNextValue(report);
            
  }
}
