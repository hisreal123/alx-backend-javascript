/* eslint-disable no-unused-vars */
/* eslint-disable */
export class HolbertonCourse {
  constructor(name, length, students){
    if(String(name)) return  this.name = name
    if(Number(length)) return this.length
    if(Array(String(students))) return this.students
  }

  // getter
  get name() {  return this._name}
  get length() {  return this._length}
  get () {  return this._student}
}