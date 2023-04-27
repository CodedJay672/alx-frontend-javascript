interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee?: string;
  yearsOfExperience: number;
  location: string;
  arg: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface Funct {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

interface Student {
  (firstName: string, lastName: string);
  ():string;
  ():string;
}

interface cons {
  firstName: string;
  lastName: string;
}

class StudentClass {
  constructor(arg: cons) {
    this._firstName = arg.firstName;
    this._lastName = arg.lastName;
  }
  displayName() {
    return `${firstName}`;
  }
  workOnHomework() {
    return 'Currently working';
  }
}
