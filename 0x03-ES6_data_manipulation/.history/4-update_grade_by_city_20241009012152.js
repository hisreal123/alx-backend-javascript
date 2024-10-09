/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (array, city, newGrades) => {
  const filteredArray = array.filter((student) => student.city === city);
  filteredArray.map((student) => {
    const gradeUpgrade = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeUpgrade) {
      student.grade = gradeUpgrade.grade;
    } else {
      student.grade = 'N/A';
    }
  });
  return filteredArray;
};

export default updateStudentGradeByCity;
