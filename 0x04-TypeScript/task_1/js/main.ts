export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: string;
  yearsOfExperience?: number;
  location: string;
  [arg: boolean]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

interface Funct {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

export interface Student {
  displayName(): string;
  workOnHomework(): string;
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
