

alert(" kkkkk")

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

studentList.forEach((student) => {
  let row = myTable.insertRow();
  let name = row.insertCell();
  let location = row.insertCell()
  name.innerHTML = studentList[i].firstName;
  location.innerHTML = studentList[i].location;
}

document.body.appendChild(myTable)