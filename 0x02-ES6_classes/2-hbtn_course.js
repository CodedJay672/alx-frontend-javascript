export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != String) return 'name should be a string';
    else if (typeof length != Number) return 'length should be a number';
    else if (typeof students != Object) return 'students should be an array';
    this._name = name;
    this._length = length;
    this.students = students;
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
