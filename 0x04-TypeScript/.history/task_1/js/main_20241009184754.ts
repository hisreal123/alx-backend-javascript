interface Teacher {
  readonly firstName : string;
  readonly lastName  : string;
  fullTimeEmployee : boolean;
  yearsOfExperience? : number;
  location : string;
  [property : string] : any; // possibility to add another property
}


// interface directors
interface Directors extends Teacher {
  numberOfReports : number;
}

// function printTeacher

const printTeacher = (firstName: string, lastName:string) => {
  return `${firstName.charAt(0)}. ${lastName}`
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudenConstructor {}
// student class
class Studentclass implements StudentClass{
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName,
    this.lastName = lastName
  }
}