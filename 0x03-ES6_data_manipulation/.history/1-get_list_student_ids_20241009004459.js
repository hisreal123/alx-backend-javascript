/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function getListStudentIds(array) {
  const listStudentIds  = [];

  if (!Array.isArray(array)){
    return listStudentIds;
  }
  array.map((id, values) => {
    listStudentIds.push(id);
  })

  return listStudentIds;
}
