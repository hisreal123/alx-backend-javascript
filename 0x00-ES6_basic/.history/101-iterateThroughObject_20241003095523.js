export default function iterateThroughObject(reportWithIterator) {
  object = {};
   (function* _() {
    for (const department of Object.values(reportWithIterator.allEmployees)) {
      for (const employee of department) {
        object[values] = employee
        yield employee | employee;
      }
    }
  })();
}
