import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new Error('floors must be a number');
    }
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
