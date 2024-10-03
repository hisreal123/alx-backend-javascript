export default function iterateThroughObject(reportWithIterator) {
  object = {};
  return (function* _() {
    for (const department of Object.values(reportWithIterator.allEmployees)) {
      for (const employee of department) {
        object[values] = employee
        yield employee | employee;
      }
    }
  })();
}
