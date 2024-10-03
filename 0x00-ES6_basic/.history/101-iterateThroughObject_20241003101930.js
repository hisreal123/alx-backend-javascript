export default function iterateThroughObject(reportWithIterator) {
  const newbject = [];
  for (const employees of reportWithIterator){
    newbject.push(employees);
  }
  return newbject;
}
