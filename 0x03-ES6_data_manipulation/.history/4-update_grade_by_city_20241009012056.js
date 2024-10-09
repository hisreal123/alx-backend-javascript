/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (array, city, newGrades) => {
  const filteredArray = array.filter((student) => student.city === city);
  filteredArray.map((student) => {
    const gradeUpgrade = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeUpgrade) {
      student.grade = gradeUpgrade.grade;
      }
  });
  return array;
};

export default updateStudentGradeByCity;
