interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have  break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

export type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}
