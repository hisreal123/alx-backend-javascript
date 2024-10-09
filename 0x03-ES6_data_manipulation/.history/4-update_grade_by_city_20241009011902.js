/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (array, city, newGrades) => {
  const filteredArray = array.filter((student) => student.city === city);
  filteredArray.map((student) => {
   if (student.grade == newGrades.grde) {
    return 
   }
  });
  return array;
};

export default updateStudentGradeByCity;
