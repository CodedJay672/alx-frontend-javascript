export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || name == null) {
	    throw 'TypeError: Name must be string';
    } else {
      this._name = name;
    }

   if (typeof length !== 'number' || length == null) {
      throw 'TypeError: Length must be a numbber';
   } else {
      this._length = length;
   }
   
   if (typeof students !== 'object' || students == null) {
      throw 'students array cannot be empty';
   } else {
      this._students = students;
  }
}
  set name(arg) {
    if (typeof arg != 'string') {
      throw 'Name must be a string';
    } else {
	this._name = arg;
    }
  }

  get name() {
    return this._name;
  }

  set length(arg) {
    this._length = arg;
  }

  get length() {
    return this._length;
  }

  set students(arg) {
    this._students = arg;
  }

  get students() {
    return this._students;
  }
}
