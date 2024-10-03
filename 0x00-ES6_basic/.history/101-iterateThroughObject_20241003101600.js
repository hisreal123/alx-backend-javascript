export default function iterateThroughObject(reportWithIterator) {
  new_object = {};
  for (const [department, employees] of Object.entries(reportWithIterator.allEmployees)) {
    new_object[department] = [];

  }
  return new_object;
}
