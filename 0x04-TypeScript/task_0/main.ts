interface Student {
    firstName:string,
    lastName:string,
    age:number,
    location:string,
}

const stud1: Student = {
  firstName:'John',
  lastName:'Whesley',
  age:30,
  location:'New-York'
}

const stud2: Student = {
  firstName:'John',
  lastName:'Whesley',
  age:30,
  location:'New-York'
}

const studentsList: Array<Student> = [
  stud1,
  stud2,
];
