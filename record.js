var layout = require ( './layout');

Record.prototype.toString = function() {
  return layout(this._artist, 20, false) + " " + layout(this._title, 20, false);
}

function Record(artist, title, price) {
  this._artist = artist;
  this._title = title;
  this._price = price;
  Object.defineProperty(this, "artist", { get: function () { return this._artist} });
  Object.defineProperty(this, "title", { get: function () { return this._title} });
  Object.defineProperty(this, "price", { get: function () { return this._price} });
}

module.exports = Record;