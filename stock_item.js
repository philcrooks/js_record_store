var layout = require ( './layout');

StockItem.prototype.toString = function (){
  return this._item.toString() + " " + layout(this._quantity, 4, true) + " " + layout(this.value.toFixed(2), 8, true);
}

StockItem.prototype.copy = function(){
  return new StockItem(this._item.copy(), this._quantity);
}

function StockItem( item, quantity ) {
  this._item = item.copy();
  this._quantity = quantity;
  Object.defineProperty(this, "item", { get: function () { return this._item} });
  Object.defineProperty(this, "quantity", {
   get: function () { return this._quantity},
   set: function (quantity) { this._quantity = quantity}
  });
  Object.defineProperty(this, "value", { get: function () { return this._item.price * this._quantity } });
  Object.defineProperty(this, "artist", { get: function () { return this._item.artist } });
  Object.defineProperty(this, "title", { get: function () { return this._item.title } });
  Object.defineProperty(this, "id", { get: function () { return this._item.id } });
}

module.exports = StockItem;