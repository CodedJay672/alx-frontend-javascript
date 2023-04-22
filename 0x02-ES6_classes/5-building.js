export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.evacuationWarningMessage) {
	    ;
    } else {
      throw 'Class extending Building must override evacuationWarningMessage';
    }
  }

  // getter method
  get sqft() {
    return this._sqft;
  }
}
