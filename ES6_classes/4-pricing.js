export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if ((typeof amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if ((typeof conversionRate) !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}