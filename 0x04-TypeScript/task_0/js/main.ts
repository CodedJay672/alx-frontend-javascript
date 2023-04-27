//interface declaration
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

//define students using the interface as type
const student1: Student = {
  firstName: "Anna",
  lastName: "Chris",
  age: 26,
  location: "United Kingdom",
};
const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 29,
  location: "United States",
};

//create array contained list of students
const studentsList = [student1, student2];
console.log(studentsList);
