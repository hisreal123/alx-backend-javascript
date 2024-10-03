export default function iterateThroughObject(reportWithIterator) {
  const newObject = [];
  for (const employees of reportWithIterator) {
    newObject.push(employees);
  }
  return newObject.join(' | ');
}
