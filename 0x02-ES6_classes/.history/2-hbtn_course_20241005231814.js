/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class HolbertonCourse {
  
  constructor(name, length, students){
    if (typeof name != "string") {
      throw new Error("Name must be a string");
    } else if (typeof length != "number") {
      throw new Error("Length must be a number");
    } else if(!Array.isArray(students)) {
      throw new Error("Students must be an array");
    }

    this._name = name;
    this._length = length;
    this._students = students;
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