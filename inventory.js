var layout = require ( './layout');
// var _ = requre( 'lodash' );

Inventory.prototype.toString = function() {
  var string = "";
  var count = 1;
  this._inventory.forEach(function(item) {
    string += layout(count++, 4, true) + ". " + item.toString() + "\n";
  });
  return string;
}

Inventory.prototype.copy = function() {
  var inventory = new Inventory();
  for (var i of this._inventory) {
    inventory.add(i.copy());
  }
  return inventory;
}

Inventory.prototype.add = function(stockItem) {
  this._inventory.push(stockItem.copy());
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