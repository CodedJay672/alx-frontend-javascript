import Currency from "./3-currency.js";

export default class Pricing {
  constructor (amount, currency) {
	  this._amount = amount;
	  this._currency = currency;
  }

  // getters and setters
  set amount(arg) {
    this._amount = arg;
  }
  get amount() {
    return this._amount;
  }
  set currency(arg) {
    this._currency = currency;
  }
  get currency() {
    return this._currency;
  }

  // instance methods
  displayFullPrice() {
    return `${this.amount} ${this._currency._name} (${this._currency._code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
