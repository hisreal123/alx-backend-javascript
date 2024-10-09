/* eslint-disable no-unused-vars */
/* eslint-disable */

const updateStudentGradeByCity = (array, city, newGrades) => {
  const filteredArray = array.filter((student) => student.city === city)
  
  return filteredArray;
};

export default updateStudentGradeByCity;
