var layout = require ( './layout');

var recordId=1;

Record.resetId = function(){
  recordId = 1;
}

Record.prototype.toString = function() {
  return layout(this._artist, 20, false) + " " + layout(this._title, 40, false);
}

Record.prototype.copy = function() {
  return new Record(this._artist, this._title, this._price, this._id);
}

function Record(artist, title, price, id) {
  this._artist = artist;
  this._title = title;
  this._price = price;
  this._id = (id === undefined) ? recordId++ : id;
  Object.defineProperty(this, "artist", { get: function () { return this._artist } });
  Object.defineProperty(this, "title", { get: function () { return this._title } });
  Object.defineProperty(this, "price", { get: function () { return this._price } });
  Object.defineProperty(this, "id", { get: function () { return this._id} });
}

module.exports = Record;