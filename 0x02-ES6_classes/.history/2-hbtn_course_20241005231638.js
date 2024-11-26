/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class HolbertonCourse {
  
  constructor(name, length, students){
    if (typeof name != String) {
      throw new Error("Name must be a string");
    } else if (typeof length != )
    if(Number(length)) return this._length
    if(Array(String(students))) return this._students
  }

  // getter
  get name() {  return this.name}
  get length() {  return this.length}
  get students() {  return this.student}

  // setter
  set name(name) {this._name = name}
  set length(length) {this._length = length}
  set student(student) {this._students = students}

}