
// interface Student
interface Student {
  firstName : string,
  lastName  : string,
  age       : number,
  location  : string
}

//
const studentList = [
  {
    firstName : "George",
    lastName  : "Omos",
    age       : 20,
    location  :  "32 ayeobasan street"
  },
  {
    firstName : "Iseal",
    lastName  : "James",
    age       : 30,
    location  :  "44 ayeobasan street"
  }
];


let myTable = document.createElement('table');

// rendering through

for (let i = 0; i < studentList.length; i++ ){
  let row = myTable.insertRow()
}
