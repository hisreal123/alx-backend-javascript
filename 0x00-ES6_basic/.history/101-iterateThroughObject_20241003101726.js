export default function iterateThroughObject(reportWithIterator) {
  const new_object = {};
  for (const [department, employees] of Object.entries(reportWithIterator.allEmployees)) {
    new_object[department] = [];
    for (const employee of employees) {
      new_object[department].push(employee);
    }
  }
  return new_object;
}
