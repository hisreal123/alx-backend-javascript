export default function iterateThroughObject(reportWithIterator) {
  const new_object = {};
  for (const employees of reportWithIterator){
    new_object.push(employees);
  }
  return new_object;
}
