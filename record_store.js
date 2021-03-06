var StockItem = require( './stock_item' );
var Record = require( './record' );

RecordStore.prototype.inventoryUpdate = function(artist, album, quantity) {
  var stockItem = this._inventory.findStockByName(artist, album);
  if (stockItem !== null) {
    stockItem.quantity = quantity; 
  }
}

RecordStore.prototype.inventoryAdd = function(artist, album, price, quantity) {
  var stockItem = this._inventory.findStockByName(artist, album);
  if (stockItem === null) {
    this._inventory.add(new StockItem(new Record(artist, album, price), quantity));
  }
}

RecordStore.prototype.sell = function(record) {
  var stockItem = this._inventory.findStockById(record.id);
  if ((stockItem !== null) && (stockItem.quantity > 0)) {
    stockItem.quantity -= 1;
    this.cash += stockItem._item.price;
    return stockItem._item.copy()
  }
  return null;
}

RecordStore.prototype.findRecord = function(artist, album) {
  return this._inventory.findRecordByName(artist, album).copy();
}

function RecordStore (name, city, inventory) {
  this._name = name;
  this._city = city;
  this._inventory = inventory.copy();
  this._cash = 0;
  Object.defineProperty(this, "name", { get: function () { return this._name} });
  Object.defineProperty(this, "city", { get: function () { return this._city} });
  Object.defineProperty(this, "cash", {
    set: function (value) { this._cash = value},
    get: function () { return this._cash }
  });
  Object.defineProperty(this, "totalAssets", { get: function () { return this._inventory.value + this._cash } });
  Object.defineProperty(this, "inventorySize", { get: function () { return this._inventory.size } });
  Object.defineProperty(this, "inventoryList", { get: function () { return this._inventory.toString() } });
}

module.exports = RecordStore;