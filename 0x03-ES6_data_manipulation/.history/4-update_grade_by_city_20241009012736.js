/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (students, city, newGrades) => {
  if (students.)
  return students
    .filter((student) => student.city === city) //filter students by city;
    .map(student => { 
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      }
    })
};

export default updateStudentGradeByCity;
