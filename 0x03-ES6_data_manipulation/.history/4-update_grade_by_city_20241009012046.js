/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (array, city, newGrades) => {
  const filteredArray = array.filter((student) => student.city === city);
  filteredArray.map((student) => {
    const gradeUpgrade = newGrades.find((grade) => grade.studentId === student.id);
    
  });
  return array;
};

export default updateStudentGradeByCity;
