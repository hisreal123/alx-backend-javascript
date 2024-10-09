/* eslint-disable no-unused-vars */
/* eslint-disable */

const getStudentIdsSum = (listOfStudents) => {
  const _sumOfAllIds = [];
  return listOfStudents.reduce((sum, student) => sum + student.id, 0)
}

export default getStudentIdsSum;
