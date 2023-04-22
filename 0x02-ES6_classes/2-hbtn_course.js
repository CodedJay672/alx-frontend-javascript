export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
	    throw 'TypeError: Name must be string';
    } else {
      this._name = name;
    }

   if (typeof length !== 'number') {
      throw 'TypeError: Length must be a numbber';
   } else {
      this._length = length;
   }
   
   if (typeof students !== 'object') {
      throw 'students array cannot be empty';
   } else {
      this.students = students;
  }
}
  set name(arg) {
    this._name = arg;
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
}
