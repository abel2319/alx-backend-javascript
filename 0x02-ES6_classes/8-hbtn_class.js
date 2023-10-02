export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() { return this._size; }

  get location() { return this._location; }

  set size(size) {
    if (typeof size !== 'number') {
      throw new Error('size must be a number');
    }
    this._size = size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new Error('location must be a number');
    }
    this._location = location;
  }
}