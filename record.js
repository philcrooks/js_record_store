function Record(artist, title, price) {
  this._artist = artist;
  this._title = title;
  this._price = price;
  Object.defineProperty(this, "artist", { get: function () { return this._artist} });
  Object.defineProperty(this, "title", { get: function () { return this._title} });
  Object.defineProperty(this, "price", { get: function () { return this._price} });
}

module.exports = Record;