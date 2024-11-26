/* eslint-disable no-unused-vars */
/* eslint-disable */
export class HolbertonCourse {
  constructor(name, length, students){
    if(String(name)) return  this._name = name
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
  set name(name) {this._stu = this.students}



}