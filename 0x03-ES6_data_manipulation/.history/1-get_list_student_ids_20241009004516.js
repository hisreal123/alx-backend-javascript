/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getListStudentIds(array) {
  const listStudentIds  = [];

  if (!Array.isArray(array)){
    return listStudentIds;
  }
  array.map((id) => {
    listStudentIds.push(id);
  })

  return listStudentIds;
}
