Inventory.prototype.toString = function() {

}

Inventory.prototype.add = function(stockItem) {
  this._inventory.push(stockItem);
}

Inventory.prototype.toString = function() {

}

function Inventory() {
  this._inventory = [];
  Object.defineProperty(this, "size", { get: function () { return this._inventory.length} });
  Object.defineProperty(this, "value", { get: function () {
    var v = 0;
    for (var i of this._inventory) {
      v += i.value;
    }
    return v;
  } });
}

module.exports = Inventory;