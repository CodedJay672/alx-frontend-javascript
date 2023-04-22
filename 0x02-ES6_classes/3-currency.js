export default class Currency {
  constructor (code, name) {
    this._name = name;
    this._code = code;
  }
  set name(arg) {
    this._name = arg;
  }
  get name() {
    return this._name;
  }
  set code(arg) {
    this._code = arg;
  }
  get code() {
    return this._code;
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
