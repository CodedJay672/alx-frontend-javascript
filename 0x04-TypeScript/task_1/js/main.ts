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
