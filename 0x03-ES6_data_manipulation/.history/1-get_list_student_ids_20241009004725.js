/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getListStudentIds(array) {
  const listStudentIds  = [];

  if (!Array.isArray(array)){
    return listStudentIds;
  }
  
  array.map((values) => {
    listStudentIds.push(values.id);
  })

  return listStudentIds;
}
