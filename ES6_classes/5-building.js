export default class Building {
  constructor(sqft) {
    if ((typeof sqft) !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;

    if (this.constructor === Building) {
      // Building class behaviour
    } else if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      // Building class behaviour
    } else if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
