function StockItem( item, quantity ) {
  this._item = item;
  this._quantity = quantity;
  Object.defineProperty(this, "item", { get: function () { return this._item} });
  Object.defineProperty(this, "quantity", { get: function () { return this._quantity} });
  Object.defineProperty(this, "value", { get: function () { return this._item.price * this._quantity } });
}

module.exports = StockItem;