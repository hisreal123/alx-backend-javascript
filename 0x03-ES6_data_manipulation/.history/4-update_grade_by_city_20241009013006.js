/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (students, city, newGrades) => {
  if (students instanceof Array) {
    return students
    .filter((student) => student.location === city) //filter students by city;
    .map(student => {
      const gradeObj = newGrades.filter(grade => grade.studentId === student.id).p;
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      }
    })
  };

  return [];
}

export default updateStudentGradeByCity;
