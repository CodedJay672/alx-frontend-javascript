interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee?: string;
  yearsOfExperience: number;
  location: string;
  ...arg: boolean;
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
