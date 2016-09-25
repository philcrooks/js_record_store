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

Inventory.prototype.findStockByName = function(artist, title) {
  var lowerCaseArtist = artist.toLowerCase();
  var lowerCaseTitle = title.toLowerCase();
  for (var i of this._inventory) {
    if ((i.artist.toLowerCase() === lowerCaseArtist) && (i.title.toLowerCase() === lowerCaseTitle)) {
      return i;
    }
  }
  return null;
}

Inventory.prototype.findStockById = function(id) {
  for (var i of this._inventory) {
    if (i.id === id) {
      return i;
    }
  }
  return null;
}

Inventory.prototype.findRecordByName = function(artist, title) {
  var stockItem = this.findStockByName(artist, title);
  if (stockItem !== null) return stockItem._item;
  return null;
}

Inventory.prototype.findRecordById = function(id) {
  var stockItem = this.findStockById(id);
  if (stockItem !== null) return stockItem._item;
  return null;
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