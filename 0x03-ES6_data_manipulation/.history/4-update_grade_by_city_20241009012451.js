/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (students, city, newGrades) => {
  return students
    .filter((student) => student.city === city)
    .map(student => { 
      const gradeObj = newGrades.find(grade => grade.studentId === student.is)
    })

  return filteredArray;
};

export default updateStudentGradeByCity;