/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getStudentsByLocation(array) {
  const _studentsByLocation = [];
  array.forEach((student) => {
    const location = student.location;
    const studentLocation = _studentsByLocation.filter((sLocation) => student.location === location);
    _studentsByLocation.push(studentLocation)
  })
}