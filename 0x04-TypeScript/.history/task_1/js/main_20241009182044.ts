interface Teacher {
  readonly firstName : string;
  readonly lastName  : string;
  fullTimeEmployee : boolean;
  yearsOfExperience? : number;
  location : string;
  [property : string] : any; // possibility to add another property
}


// interface directors
interface Directors 