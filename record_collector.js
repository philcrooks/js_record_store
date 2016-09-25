RecordCollector.prototype.buy = function(record) {
  if (this._cash >= record.price) {
    this._cash -= record.price;
    this._collection.push(record.copy());
    return true;
  }
  return false;
}

RecordCollector.prototype.sell = function(record) {
  for (var c = 0, n = this._collection.length; c < n; c++) {
    if (this._collection[c] === record) {
      this._cash += record.price;
      this._collection.splice(c, 1);
      return record;
    }
  }
  return null;
}

function RecordCollector(name) {
  this._name = name;
  this._collection = [];
  this._cash = 0;
  Object.defineProperty(this, "name", { get: function () { return this._name} });
  Object.defineProperty(this, "collectionSize", { get: function () { return this._collection.length} });
  Object.defineProperty(this, "cash", {
    set: function (value) { this._cash = value},
    get: function () { return this._cash }
  });
}

module.exports = RecordCollector;